// spec: specs/sagta_test_plan.md
// Download Map tests for sagta_hybrid Project

import { test, expect } from '@playwright/test';
import { login } from './support/auth';

test.describe('Download Maps - sagta_hybrid Project', () => {
  test('Download sagta_hybrid - A3 Landscape Layout', async ({ page }) => {
    // 1. Navigate to SAGTA map downloader and log in
    await login(page);

    // 2. Click on sagta_hybrid project to open it
    await page.getByRole('link', { name: 'Load the map' }).first().click();

    // 3. Wait for the map and print panel to load
    const layoutSelect = page.locator('select#print-template');
    await expect(layoutSelect).toBeVisible();

    // 4. Select A3 landscape layout
    await layoutSelect.selectOption({ label: 'A3 landscape hybrid' });

    // 5. Click Print button and verify PDF download initiates
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Print' }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/sagta_hybrid.*A3.*landscape.*\.pdf/i);
  });

  test('Download sagta_hybrid - A3 Portrait Layout', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Load the map' }).first().click();

    const layoutSelect = page.locator('select#print-template');
    await expect(layoutSelect).toBeVisible();
    await layoutSelect.selectOption({ label: 'A3 portrait hybrid' });

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Print' }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/sagta_hybrid.*A3.*portrait.*\.pdf/i);
  });

  test('Download sagta_hybrid - A4 Landscape Layout', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Load the map' }).first().click();

    const layoutSelect = page.locator('select#print-template');
    await expect(layoutSelect).toBeVisible();
    await layoutSelect.selectOption({ label: 'A4 landscape hybrid' });

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Print' }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/sagta_hybrid.*A4.*landscape.*\.pdf/i);
  });

  test('Download sagta_hybrid - A4 Portrait Layout', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Load the map' }).first().click();

    const layoutSelect = page.locator('select#print-template');
    await expect(layoutSelect).toBeVisible();
    await layoutSelect.selectOption({ label: 'A4 portrait hybrid' });

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Print' }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/sagta_hybrid.*A4.*portrait.*\.pdf/i);
  });

  test('Profile button is working', async ({ page }) => {
    await login(page);
    await page.getByRole('link', { name: 'Load the map' }).first().click();

    await page.locator('#button-altiProfil').click();
    await page.locator('canvas').nth(1).click({
        position: {
        x: 112,
        y: 272
        }
    });
    await page.locator('canvas').nth(1).click({
        position: {
        x: 294,
        y: 440
        }
    });
    await page.getByText('1141.00 m').click();
    await page.getByText('1151.00 m').click();
  });
});
