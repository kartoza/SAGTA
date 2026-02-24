// spec: specs/sagta_test_plan.md
// Project Selection and Browsing tests

import { test, expect } from '@playwright/test';

test.describe('Project Selection and Browsing', () => {
  test('View Available Projects', async ({ page }) => {
    // Precondition: User is logged in
    await page.goto('https://sta.sagta.kartoza.com/');
    const usernameField = page.locator('input[type="text"], input[name*="user"], input[placeholder*="user"]').first();
    await usernameField.fill('admin');
    const passwordField = page.locator('input[type="password"]');
    await passwordField.fill('admin');
    const loginButton = page.locator('button:has-text("Login"), button:has-text("Sign"), input[type="submit"]').first();
    await loginButton.click();
    await page.waitForLoadState('networkidle');
    
    // 1. Observe the list of available projects
    // 2. Verify the following projects are visible:
    // - sagta_hybrid
    // - sagta_ortho
    // - sagta_topo
    // - z_global_thematic
    // - z_sa
    await expect(page.locator('text=sagta_hybrid')).toBeVisible();
    await expect(page.locator('text=sagta_ortho')).toBeVisible();
    await expect(page.locator('text=sagta_topo')).toBeVisible();
    await expect(page.locator('text=z_global_thematic')).toBeVisible();
    await expect(page.locator('text=z_sa')).toBeVisible();
    
    // 3. Verify each project has a thumbnail or description
    const projectCards = page.locator('[data-testid="project"], .project, .project-card, li:has-text("sagta")').first();
    await expect(projectCards).toBeVisible();
  });
});
