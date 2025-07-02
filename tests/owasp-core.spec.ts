import { test, expect } from '@playwright/test';

test('OWASP Juice Critical path', async ({ page }) => {
  await page.goto('https://demo.owasp-juice.shop/');

  // Check if the Page was loaded successfully
  const response = await page.goto('https://demo.owasp-juice.shop/'); // Replace with the actual URL you want to test
  expect(page).toHaveTitle("OWASP Juice Shop"); // Ensure the page loads successfully
  expect(response?.status()).toBe(200); // Check if the response status is 200
});

test('register a new user', async ({ page }) => {
  await page.goto('https://demo.owasp-juice.shop/');

  // Click on the "Register" link
  await page.getByRole('link', { name: 'Register' }).click();

  // Fill in the registration form
  await page.getByLabel('Email').fill("");
  await page.getByLabel('Password').fill('Test1234');
  await page.getByText('Register').click();
});