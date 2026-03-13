import { test, expect } from '@playwright/test';

test.use({
  storageState: '.auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sagtamapdownloader.kartoza.com/');
  await page.getByText('If you are a paid-up member').click();
  await page.getByRole('link', { name: 'project image SAGTA hybrid' }).click();
  await page.locator('#button-print').click();
  await page.locator('#button-altiProfil').click();
  await page.locator('canvas').first().click({
    position: {
      x: 440,
      y: 710
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 1335,
      y: 260
    }
  });
  await page.locator('#button-altiProfil').click();
  await page.locator('#button-altiProfil').click();
  await page.locator('canvas').first().click({
    position: {
      x: 479,
      y: 710
    }
  });
  await page.locator('#button-altiProfil').click();
  await page.locator('#button-altiProfil').click();
  await page.locator('canvas').first().click({
    position: {
      x: 316,
      y: 746
    }
  });
  await page.locator('canvas').first().dblclick();
  await page.getByText('1155.00 m').dblclick();
});