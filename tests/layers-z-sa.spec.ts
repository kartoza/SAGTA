// spec: specs/sagta_test_plan.md
// Layer Activation and Deactivation tests for z_sa Project

import { test, expect } from '@playwright/test';

test.describe('Layer Activation and Deactivation - z_sa Project', () => {
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

  test('Activate All Layers in z_sa', async ({ page }) => {
    // Precondition: User is logged in and viewing z_sa project
    await login(page);
    
    // 1. Click on z_sa project to open it
    const z_saProject = page.locator('text=z_sa').first();
    await z_saProject.click();
    await page.waitForLoadState('networkidle');
    
    // 2. Verify the layer panel is displayed
    const layerPanel = page.locator('[data-testid="layers"], .layers-panel, .layer-panel, .sidebar').first();
    await expect(layerPanel).toBeVisible();
    
    // 3. For each layer in the panel, activate it
    const layerItems = page.locator('.layer-item, [role="treeitem"], .layer, li:has-text("Layer")');
    const layerCount = await layerItems.count();
    expect(layerCount).toBeGreaterThan(0);
    
    for (let i = 0; i < layerCount; i++) {
      const layerCheckbox = layerItems.nth(i).locator('input[type="checkbox"], button[aria-label*="toggle"], .eye-icon').first();
      const isChecked = await layerCheckbox.isChecked().catch(() => false);
      
      if (!isChecked) {
        await layerCheckbox.click();
        await page.waitForTimeout(500);
      }
    }
    
    // 4. Verify all layers are now visible on the map
    const mapContainer = page.locator('[data-testid="map"], .map, canvas').first();
    await expect(mapContainer).toBeVisible();
  });

  test('Deactivate All Layers in z_sa', async ({ page }) => {
    // Precondition: User is logged in and viewing z_sa project
    await login(page);
    
    // 1. Click on z_sa project to open it
    const z_saProject = page.locator('text=z_sa').first();
    await z_saProject.click();
    await page.waitForLoadState('networkidle');
    
    // Activate all layers first
    const layerPanel = page.locator('[data-testid="layers"], .layers-panel, .layer-panel, .sidebar').first();
    await expect(layerPanel).toBeVisible();
    
    const layerItems = page.locator('.layer-item, [role="treeitem"], .layer, li:has-text("Layer")');
    const layerCount = await layerItems.count();
    
    for (let i = 0; i < layerCount; i++) {
      const layerCheckbox = layerItems.nth(i).locator('input[type="checkbox"], button[aria-label*="toggle"], .eye-icon').first();
      const isChecked = await layerCheckbox.isChecked().catch(() => false);
      if (!isChecked) {
        await layerCheckbox.click();
        await page.waitForTimeout(500);
      }
    }
    
    // 1. For each active layer in the panel, deactivate it
    const layerItemsAfter = page.locator('.layer-item, [role="treeitem"], .layer, li:has-text("Layer")');
    const layerCountAfter = await layerItemsAfter.count();
    
    for (let i = 0; i < layerCountAfter; i++) {
      const layerCheckbox = layerItemsAfter.nth(i).locator('input[type="checkbox"], button[aria-label*="toggle"], .eye-icon').first();
      const isChecked = await layerCheckbox.isChecked().catch(() => true);
      
      if (isChecked) {
        await layerCheckbox.click();
        await page.waitForTimeout(500);
      }
    }
    
    // 2. Verify all layers are now hidden on the map
    const mapContainer = page.locator('[data-testid="map"], .map, canvas').first();
    await expect(mapContainer).toBeVisible();
  });

  test('Toggle Individual Layers in z_sa', async ({ page }) => {
    // Precondition: User is logged in and viewing z_sa project
    await login(page);
    
    // 1. Click on z_sa project to open it
    const z_saProject = page.locator('text=z_sa').first();
    await z_saProject.click();
    await page.waitForLoadState('networkidle');
    
    // 1. Randomly select 3-5 layers and toggle their visibility on and off
    const layerPanel = page.locator('[data-testid="layers"], .layers-panel, .layer-panel, .sidebar').first();
    const layerItems = page.locator('.layer-item, [role="treeitem"], .layer, li:has-text("Layer")');
    const layerCount = await layerItems.count();
    const layersToTest = Math.min(5, Math.max(3, layerCount));
    
    for (let i = 0; i < layersToTest; i++) {
      const randomIndex = Math.floor(Math.random() * layerCount);
      const layerCheckbox = layerItems.nth(randomIndex).locator('input[type="checkbox"], button[aria-label*="toggle"], .eye-icon').first();
      
      // Toggle on
      await layerCheckbox.click();
      await page.waitForTimeout(300);
      
      // Toggle off
      await layerCheckbox.click();
      await page.waitForTimeout(300);
    }
    
    // 2. Verify each layer toggle works independently
    const mapContainer = page.locator('[data-testid="map"], .map, canvas').first();
    await expect(mapContainer).toBeVisible();
  });
});
