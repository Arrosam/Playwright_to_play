import { test, expect } from '@playwright/test';
import { generateEmailAddress, generatePassword, generatePsudoName } from '../utils/account-generator';

test('register a new user', async ({ page }) => {
  await page.goto('https://demo.owasp-juice.shop/');

  // Click on the "Register" link
  await page.getByText('Dismiss').click();
  await page.getByText('Force page reload').click();
  await page.locator('#navbarAccount').click();
  await page.locator('#navbarLoginButton').click();
  await page.getByText('Not yet a customer?').click();
  await page.locator('//*[@id=\"emailControl\"]').fill(generateEmailAddress());
  const password = generatePassword();
  await page.locator('#passwordControl').fill(password);
  await page.locator('#repeatPasswordControl').fill(password);
  await page.waitForTimeout(500);
  await page.locator('//*[@id="registration-form"]/div[1]/mat-form-field[1]/div[1]/div/div[1]').click();
  await page.getByText(' Your eldest siblings middle name? ').click();
  await page.locator('#securityAnswerControl').fill(generatePsudoName());
});