import { test, expect } from '@playwright/test';

test.describe('Login to gov', () => {

test('login', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('link', { name: ' Logowanie do panelu Zaloguj' }).click();
    const pageCitizen = await page.locator('#js-gov2__section-wrapper')

    await expect(pageCitizen).toContainText('Zaloguj się')
});

test('mObywatel', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('link', { name: ' Logowanie do panelu Zaloguj' }).click();
    await page.locator('#js-show-mobywatel-view').click();
    const pageCitizen = await page.locator('#js-mobywatel-view')

    await expect(pageCitizen).toContainText('Aby zeskanować kod:')
});

test('choose a secure login method', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('link', { name: ' Logowanie do panelu Zaloguj' }).click();
    await page.locator('#js-go-to-pz-button').click();
    const pageCitizen = await page.locator('#coi-wk-loginMethodSelect__form')

    await expect(pageCitizen).toContainText('Zaloguj się do usługi')
  });
})