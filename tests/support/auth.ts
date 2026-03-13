import { Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

let envLoaded = false;
function loadEnvOnce() {
  if (envLoaded) return;
  const envPath = path.resolve(__dirname, '..', '..', '.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx === -1) continue;
      const key = trimmed.slice(0, idx).trim();
      const value = trimmed.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
      if (!(key in process.env)) process.env[key] = value;
    }
  }
  envLoaded = true;
}

loadEnvOnce();

const BASE_URL = process.env.SAGTA_BASE_URL ?? 'https://sagtamapdownloader.kartoza.com/';
const USERNAME = process.env.SAGTA_USERNAME ?? 'admin';

function getPassword(): string {
  const pwd = process.env.SAGTA_PASSWORD;
  if (!pwd) {
    throw new Error(
      'Set SAGTA_PASSWORD in your environment (e.g. `SAGTA_PASSWORD=... npx playwright test`).'
    );
  }
  return pwd;
}

export async function login(page: Page): Promise<void> {
  await page.goto(BASE_URL);

  // If landing page has a "Connect" CTA that opens the login form, click it first.
  const connectButton = page
    .locator('button:has-text("Connect"), a:has-text("Connect")')
    .first();
  if (!(await page.locator('input[type="text"], input[name*="user"], input[placeholder*="user"]').first().isVisible())) {
    if (await connectButton.isVisible()) {
      await Promise.all([page.waitForLoadState('networkidle'), connectButton.click()]);
    }
  }

  const usernameField = page
    .locator('input[type="text"], input[name*="user"], input[placeholder*="user"]')
    .first();
  await usernameField.waitFor({ state: 'visible' });
  await usernameField.fill(USERNAME);

  const passwordField = page.locator('input[type="password"]');
  await passwordField.waitFor({ state: 'visible' });
  await passwordField.fill(getPassword());

  const loginButton = page
    .locator('button:has-text("Login"), button:has-text("Sign"), input[type="submit"]')
    .first();
  await loginButton.click();
  await page.waitForLoadState('networkidle');
}

export { BASE_URL, USERNAME };
