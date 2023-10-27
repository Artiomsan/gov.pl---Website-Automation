import { test, expect } from '@playwright/test';

test.describe('Functionality tests for the gov.pl website', () => {

  test('open www.gov.pl', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    const pageTitle = await page.locator('#govpl-i-gov_home')

    await expect(pageTitle).toContainText('Strona główna')
  });

  test('tab citizen', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    const pageTab = await page.locator('#citizens-tab')

    await expect(pageTab).toContainText('Dla Obywatela')
  });

  test('tab business', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    const pageTab = await page.locator('#business-tab')

    await expect(pageTab).toContainText('Dla Przedsiębiorcy')
  });

  test('tab officials', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    const pageTab = await page.locator('#officials-tab')

    await expect(pageTab).toContainText('Dla Urzędnika')
  });

  test('tab farmer', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    const pageTab = await page.locator('#farmer-tab')

    await expect(pageTab).toContainText('Dla rolnika')
  });

  test('search without specifying a name', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('button', { name: ' Wyszukaj' }).click();
    const searchEngine = await page.locator('.search__empty-state')

    await expect(searchEngine).toContainText('Wpisz jedną frazę lub kilkaPrzegladaj listę wynikówZawęź listę wyników korzystaj')
  });

  test('search engine test', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByPlaceholder('Szukaj usług, informacji, wiadomości').click();
    await page.getByPlaceholder('Szukaj usług, informacji, wiadomości').fill('Warszawa');
    await page.getByRole('button', { name: ' Wyszukaj' }).click();
    const searchEngine = await page.locator('.search__counter')

    await expect(searchEngine).toContainText('Znaleziono wyników: ')
  });

  test('verification of the choice of administrative unit', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByPlaceholder('Szukaj usług, informacji, wiadomości').click();
    await page.getByPlaceholder('Szukaj usług, informacji, wiadomości').fill('Warszawa');
    await page.getByRole('button', { name: ' Wyszukaj' }).click();
    await page.getByText('Jednostka administracji Naciśnij enter aby rozwinąć. Użyj strzałek aby zmienić p').click();
    await page.getByRole('option', { name: '100-lecie służby cywilnej' }).locator('label').click();
    await page.getByRole('link', { name: 'Mural z okazji 100-lecia służby cywilnej' }).click();
    const articlePage = await page.locator('#main-content')

    await expect(articlePage).toContainText('Mural z okazji 100-lecia służby cywilnej')

  });
})