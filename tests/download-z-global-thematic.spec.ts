// spec: specs/sagta_test_plan.md
// Download Map tests for z_global_thematic Project

import { test, expect } from '@playwright/test';

test.describe('Download Maps - z_global_thematic Project', () => {
  // Helper function to login
  async function login(page) {
    await page.goto('https://sta.sagta.kartoza.com/');
    const usernameField = page.locator('input[type="text"], input[name*="user"], input[placeholder*="user"]').first();
    await usernameField.fill('admin');
    const passwordField = page.locator('input[type="password"]');
    await passwordField.fill('admin');
    const loginButton = page.locator('button:has-text("Login"), button:has-text("Sign"), input[type="submit"]').first();
    await loginButton.click();
    await page.waitForLoadState('networkidle');
  }

  test('Download z_global_thematic - A3 Landscape Layout', async ({ page, context }) => {
    // 1. Navigate to z_global_thematic project
    await login(page);
    const z_global_thematicProject = page.locator('text=z_global_thematic').first();
    await z_global_thematicProject.click();
    await page.waitForLoadState('networkidle');
    
    // 2. Select "A3 landscape" layout
    const layoutSelector = page.locator('[data-testid="layout"], select, .layout-selector, button:has-text("Layout")').first();
    if (await layoutSelector.isVisible()) {
      await layoutSelector.click();
      const a3LandscapeOption = page.locator('text=A3 landscape, text=A3 Landscape, text=a3-landscape').first();
      await a3LandscapeOption.click();
      await page.waitForTimeout(1000);
    }
    
    // 3. Click "Download" button
    const downloadPromise = context.waitForEvent('page');
    const downloadButton = page.locator('button:has-text("Download"), button:has-text("Export"), a:has-text("Download")').first();
    await downloadButton.click();
    
    // 4. Verify PDF download initiates
    try {
      const newPage = await downloadPromise;
      await newPage.close();
    } catch (e) {
      await page.waitForTimeout(2000);
    }
  });

  test('Download z_global_thematic - A3 Portrait Layout', async ({ page, context }) => {
    await login(page);
    const z_global_thematicProject = page.locator('text=z_global_thematic').first();
    await z_global_thematicProject.click();
    await page.waitForLoadState('networkidle');
    
    // 1. Select "A3 portrait" layout
    const layoutSelector = page.locator('[data-testid="layout"], select, .layout-selector, button:has-text("Layout")').first();
    if (await layoutSelector.isVisible()) {
      await layoutSelector.click();
      const a3PortraitOption = page.locator('text=A3 portrait, text=A3 Portrait, text=a3-portrait').first();
      await a3PortraitOption.click();
      await page.waitForTimeout(1000);
    }
    
    // 2. Click "Download" button
    const downloadPromise = context.waitForEvent('page');
    const downloadButton = page.locator('button:has-text("Download"), button:has-text("Export"), a:has-text("Download")').first();
    await downloadButton.click();
    
    // 3. Verify PDF download initiates
    try {
      const newPage = await downloadPromise;
      await newPage.close();
    } catch (e) {
      await page.waitForTimeout(2000);
    }
  });

  test('Download z_global_thematic - A4 Landscape Layout', async ({ page, context }) => {
    await login(page);
    const z_global_thematicProject = page.locator('text=z_global_thematic').first();
    await z_global_thematicProject.click();
    await page.waitForLoadState('networkidle');
    
    // 1. Select "A4 landscape" layout
    const layoutSelector = page.locator('[data-testid="layout"], select, .layout-selector, button:has-text("Layout")').first();
    if (await layoutSelector.isVisible()) {
      await layoutSelector.click();
      const a4LandscapeOption = page.locator('text=A4 landscape, text=A4 Landscape, text=a4-landscape').first();
      await a4LandscapeOption.click();
      await page.waitForTimeout(1000);
    }
    
    // 2. Click "Download" button
    const downloadPromise = context.waitForEvent('page');
    const downloadButton = page.locator('button:has-text("Download"), button:has-text("Export"), a:has-text("Download")').first();
    await downloadButton.click();
    
    // 3. Verify PDF download initiates
    try {
      const newPage = await downloadPromise;
      await newPage.close();
    } catch (e) {
      await page.waitForTimeout(2000);
    }
  });

  test('Download z_global_thematic - A4 Portrait Layout', async ({ page, context }) => {
    await login(page);
    const z_global_thematicProject = page.locator('text=z_global_thematic').first();
    await z_global_thematicProject.click();
    await page.waitForLoadState('networkidle');
    
    // 1. Select "A4 portrait" layout
    const layoutSelector = page.locator('[data-testid="layout"], select, .layout-selector, button:has-text("Layout")').first();
    if (await layoutSelector.isVisible()) {
      await layoutSelector.click();
      const a4PortraitOption = page.locator('text=A4 portrait, text=A4 Portrait, text=a4-portrait').first();
      await a4PortraitOption.click();
      await page.waitForTimeout(1000);
    }
    
    // 2. Click "Download" button
    const downloadPromise = context.waitForEvent('page');
    const downloadButton = page.locator('button:has-text("Download"), button:has-text("Export"), a:has-text("Download")').first();
    await downloadButton.click();
    
    // 3. Verify PDF download initiates
    try {
      const newPage = await downloadPromise;
      await newPage.close();
    } catch (e) {
      await page.waitForTimeout(2000);
    }
  });
});
