// spec: specs/sagta_test_plan.md
// Authentication tests for SAGTA Map Downloader

import { test, expect } from '@playwright/test';
import { login } from './support/auth';

test.describe('Authentication', () => {
  test('Login with Valid Credentials', async ({ page }) => {
    await login(page);

    // Verify successful login and landing copy is visible
    const welcomeText = page.locator('h2.liz-repository-title:has-text("Map downloader")');
    await expect(welcomeText).toBeVisible();
  });

  test('Logout', async ({ page }) => {
    // Precondition: User is logged in
    await login(page);
    
    // 1. Open user dropdown (admin)
    const userMenuToggle = page.locator('#info-user, a.dropdown-toggle:has-text("admin")').first();
    await userMenuToggle.click();
    
    // 2. Click "Disconnect" in dropdown
    let logoutButton = page.locator('ul.dropdown-menu a[href*="auth/login/out"]').first();
    if (!(await logoutButton.isVisible())) {
      logoutButton = page.getByRole('link', { name: /disconnect/i }).first();
    }
    await logoutButton.click();
    
    // 3. Verify user is redirected to login page
    await page.waitForLoadState('networkidle');
    const connectButton = page
    .locator('button:has-text("Connect"), a:has-text("Connect")')
    .first();
    await expect(connectButton).toBeVisible();
  });
});
