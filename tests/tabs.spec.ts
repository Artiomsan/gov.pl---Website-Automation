import { test, expect } from '@playwright/test';

test.describe('Functionality tests for the tabs', () => {
  // “Dla obywatela”, “Dla Przedsiębiorcy”, “Dla Urzędnika”, “Dla Rolnika”


  // “Dla obywatela”
  test('view all services', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('link', { name: 'Zobacz wszystkie usługi', exact: true }).click();
    const pageCitizen = await page.locator('.services-search-holder')

    await expect(pageCitizen).toContainText('Usługi dla obywatela')
  });

  test('documents and personal data', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('link', { name: 'Dokumenty i dane osobowe' }).click();
    const pageCitizen = await page.locator('#dokumenty-i-dane-osobowe')

    await expect(pageCitizen).toHaveText('Dokumenty i dane osobowe')
  });

  test('ID card', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('link', { name: 'Dokumenty i dane osobowe' }).click();
    await page.getByRole('link', { name: 'Dowód osobisty - informacje' }).click();
    const pageCitizen = await page.locator('#main-content')

    await expect(pageCitizen).toHaveClass('service-card-area main-container')
  });

  // “Dla Przedsiębiorcy”
  test('tab the entrepreneur', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla Przedsiębiorcy' }).click();
    const pageBusines = await page.locator('#services-business')

    await expect(pageBusines).toContainText('Tarcza Antykryzysowa')
  });

  test('anti-crisis shield', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla Przedsiębiorcy' }).click();
    await page.getByRole('link', { name: 'Tarcza Antykryzysowa' }).click();
    const pageBusines = await page.locator('#tarcza-antykryzysowa')

    await expect(pageBusines).toContainText('Tarcza Antykryzysowa')
  });

  test('loan for SME', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla Przedsiębiorcy' }).click();
    await page.getByRole('link', { name: 'Tarcza Antykryzysowa' }).click();
    await page.getByPlaceholder('Znajdź sprawę lub usługę').click();
    await page.getByPlaceholder('Znajdź sprawę lub usługę').fill('Pożyczka');
    await page.click('a[href="https://www.gov.pl/web/gov/pozyczka-obrotowa-finansujaca-wyplate-wynagrodzen-w-sektorze-msp"]');
    const pageBusines = await page.locator('#main-content')

    await expect(pageBusines).toContainText('Pożyczka obrotowa finansująca wypłatę wynagrodzeń w sektorze MŚP')
  });

  // “Dla Urzędnika”
  test('tab officials', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla Urzędnika' }).click();
    const pageOfficials = await page.locator('#services-officials')

    await expect(pageOfficials).toContainText('Sprawy publiczne')
  });

  test('public affairs', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla Urzędnika' }).click();
    await page.getByRole('link', { name: 'Sprawy publiczne' }).click();
    const pageOfficials = await page.locator('#sprawy-publiczne')

    await expect(pageOfficials).toContainText('Sprawy publiczne')
  });

  test('providing public information', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla Urzędnika' }).click();
    await page.getByRole('link', { name: 'Sprawy publiczne' }).click();
    await page.getByRole('link', { name: 'Udostępnianie informacji publicznej' }).click();
    await page.getByRole('button', { name: 'ZAPOZNAŁEM SIĘ' }).click();
    const pageOfficials = await page.locator('.serviceNameSection')

    await expect(pageOfficials).toContainText('Udostępnianie informacji publicznej')

  });

  // “Dla Rolnika”
  test('tab farmer', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla rolnika' }).click();
    const pageFarmer = await page.locator('#services-farmer')

    await expect(pageFarmer).toContainText('Zaświadczenia, zezwolenia i rejestry')
  });

  test('certificates, permits and registers', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla rolnika' }).click();
    await page.getByRole('link', { name: 'Zaświadczenia, zezwolenia i rejestry' }).click();
    const pageFarmer = await page.locator('#zaswiadczenia')

    await expect(pageFarmer).toContainText('Zaświadczenia, zezwolenia i rejestry')
  });

  test('submit an application', async ({ page }) => {
    await page.goto('https://www.gov.pl/');
    await page.getByRole('tab', { name: 'Dla rolnika' }).click();
    await page.getByRole('link', { name: 'Zaświadczenia, zezwolenia i rejestry' }).click();
    await page.getByRole('link', { name: 'Złóż wniosek o wydanie świadectwa fitosanitarnego' }).click();
    const pageFarmer = await page.locator('.service-card')

    await expect(pageFarmer).toContainText('Złóż wniosek o wydanie świadectwa fitosanitarnego')
  });

  // test('select attachment', async ({ page, }) => {
  // await page.goto('https://www.gov.pl/');
  // await page.getByRole('tab', { name: 'Dla rolnika' }).click();
  // await page.getByRole('link', { name: 'Zaświadczenia, zezwolenia i rejestry' }).click();
  // await page.getByRole('link', { name: 'Złóż wniosek o wydanie świadectwa fitosanitarnego' }).click();
  // await page.getByRole('link', { name: 'Rozwiń tekst  Ile zapłacisz' }).click();
  // await page.getByRole('link', { name: 'w załączniku do ustawy o opłacie skarbowej' }).click();
  // await page.click('a[href="https://piorin.gov.pl/files/userfiles/giorin/prawo/ustawy/lex-dz-u-2019-1000-t-j-oplata-skarbowa.pdf"]');
  // const currentUrl = page.url();
  // expect(currentUrl).toMatch(/\.pdf$/i);
  //      *****************************************************************************************************************
  // Nie jestem w stanie otworzyć tego załącznika, być może jest to jakieś zabezpieczenie strony. Adres jest prawidłowy, 
  // ale z jakiegoś powodu, zwraca mi adres: https://www.gov.pl/web/gov/zloz-wniosek-o-wydanie-swiadectwa-fitosanitarnego
  // zamiast: https://piorin.gov.pl/files/userfiles/giorin/prawo/ustawy/lex-dz-u-2019-1000-t-j-oplata-skarbowa.pdf
  // });

  // Próbowałem jeszcze bezpośrednio tam wejść i miałem również taki błąd:
  //   Error: page.goto: net::ERR_ABORTED at https://piorin.gov.pl/files/userfiles/giorin/prawo/ustawy/lex-dz-u-2019-1000-t-j-oplata-skarbowa.pdf
  // =========================== logs ===========================
  // navigating to "https://piorin.gov.pl/files/userfiles/giorin/prawo/ustawy/lex-dz-u-2019-1000-t-j-oplata-skarbowa.pdf", waiting until "domcontentloaded"
  // ============================================================

  //   122 |     // await page.getByRole('link', { name: 'w załączniku do ustawy o opłacie skarbowej' }).click();
  //   123 |     // await page.click('a[href="https://piorin.gov.pl/files/userfiles/giorin/prawo/ustawy/lex-dz-u-2019-1000-t-j-oplata-skarbowa.pdf"]');
  // > 124 |     await page.goto('https://piorin.gov.pl/files/userfiles/giorin/prawo/ustawy/lex-dz-u-2019-1000-t-j-oplata-skarbowa.pdf', { waitUntil: 'domcontentloaded' });
  //       |                ^
  //   125 |     await page.waitForTimeout(5000);
  //   126 |   
  //   127 |
})