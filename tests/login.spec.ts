import { test, expect } from '@playwright/test';

test('signs in to the practice application', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.getByLabel('Username:').fill('rahulshettyacademy');
  await page.getByLabel('Password:').fill('Learning@830$3mK2');
  await page.getByRole('radio', { name: 'User' }).check();
  await page.getByRole('button', { name: /okay/i }).click();
  await page.getByRole('combobox').selectOption({ label: 'Student' });
  await page.getByLabel('I Agree to the terms and conditions').click({ force: true });
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page).toHaveURL(/angularpractice\/shop/);

  const iPhoneX = page.locator('.card').filter({ hasText: 'iPhone X' });
  await expect(iPhoneX).toBeVisible();
  await iPhoneX.getByRole('button', { name: /add/i }).click();

  await page.locator('a.nav-link.btn-primary').filter({ hasText: 'Checkout' }).click();
  await expect(page.getByText('iphone X', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: /checkout/i }).click();
  await page.locator('#country').fill('India');
  await page.locator('#checkbox2').check({ force: true });
  await page.locator('input[type="submit"][value="Purchase"]').click();

  await expect(page.getByText(/success/i)).toBeVisible();
  await expect(page.getByText(/thank you/i)).toBeVisible();
});
