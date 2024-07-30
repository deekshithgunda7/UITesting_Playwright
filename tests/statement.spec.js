const { test, expect } = require('@playwright/test');

test("In statement page, dropdown should show the list of countries",async({page})=>{
    await page.goto("https://privacy.amexgbt.com/statement")
    const value=await page.locator("#countrylist").textContent();
    await expect(value.includes('ARGENTINA','AUSTRALIA','BELGIUM','CANADA','CHINA(Shanghai)','CHINA(Beijing)','CHINA(Guangzhou)'
    ,'COLOMBIA','CZECH REPUBLIC','DENMARK', 'FINLAND','FRANCE','GERMANY','HONG KONG','HUNGARY','INDIA','IRELAND',
    'ITALY','JAPAN','MEXICO','NETHERLANDS','NEW ZEALAND','NORWAY','POLAND','SINGAPORE','SLOVAKIA','SPAIN','SWEDEN',
    'SWITZERLAND','TAIWAN','THAILAND','UNITED KINGDOM','UNITED STATES (California)','UNITED STATES',
    'Any Other Country')).toBeTruthy();
});

test('Selecting language leads to statement page in that language', async ({ page }) => {

    await page.goto('https://privacy.amexgbt.com/');
    const languageSelector = await page.locator('#language-selector');
    await languageSelector.selectOption({ label: 'German' }); 
    await page.waitForSelector('.content_line');
    const statementPageText = await page.locator('.content_line').innerText();
    console.log("data  "+statementPageText);
    expect(statementPageText).toContain('genutzt'); 
  });

  test('Selecting country displays corresponding company address', async ({ page }) => {
 
    await page.goto('https://privacy.amexgbt.com/statement');
    const languageSelector = await page.locator('#countrylist');
    await languageSelector.selectOption({ label: 'UNITED STATES (California)' }); 

    await page.waitForSelector('.city');
    const companyAddressText = await page.locator('.city').innerText();

    expect(companyAddressText).toContain('UNITED STATES (California)'); 
  });

  
