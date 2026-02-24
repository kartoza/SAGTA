// spec: specs/sagta_test_plan.md
// Authentication tests for SAGTA Map Downloader

import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('Login with Valid Credentials', async ({ page }) => {
    // 1. Navigate to https://sta.sagta.kartoza.com/
    await page.goto('https://sta.sagta.kartoza.com/');
    
    // 2. Enter username "admin" in the username field
    const usernameField = page.locator('input[type="text"], input[name*="user"], input[placeholder*="user"]').first();
    await usernameField.fill('admin');
    
    // 3. Enter password "admin" in the password field
    const passwordField = page.locator('input[type="password"]');
    await passwordField.fill('admin');
    
    // 4. Click the "Login" button
    const loginButton = page.locator('button:has-text("Login"), button:has-text("Sign"), input[type="submit"]').first();
    await loginButton.click();
    
    // 5. Verify successful login and dashboard is displayed
    await page.waitForLoadState('networkidle');
    const dashboardTitle = page.locator('text=Dashboard, text=Projects, text=Home').first();
    await expect(dashboardTitle).toBeVisible();
  });

  test('Logout', async ({ page }) => {
    // Precondition: User is logged in
    await page.goto('https://sta.sagta.kartoza.com/');
    const usernameField = page.locator('input[type="text"], input[name*="user"], input[placeholder*="user"]').first();
    await usernameField.fill('admin');
    const passwordField = page.locator('input[type="password"]');
    await passwordField.fill('admin');
    const loginButton = page.locator('button:has-text("Login"), button:has-text("Sign"), input[type="submit"]').first();
    await loginButton.click();
    await page.waitForLoadState('networkidle');
    
    // 1. Navigate to user menu
    const userMenu = page.locator('button[aria-label*="user"], button[aria-label*="User"], text=/User|Profile|Account/i').first();
    await userMenu.click();
    
    // 2. Click "Logout"
    const logoutButton = page.locator('text=Logout, text=Sign Out, text=Log Out').first();
    await logoutButton.click();
    
    // 3. Verify user is redirected to login page at https://sta.sagta.kartoza.com/
    await page.waitForURL('**/sta.sagta.kartoza.com/**');
    await expect(page.locator('text=Login, text=Sign In')).toBeVisible();
  });
});
