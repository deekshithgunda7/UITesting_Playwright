const { test, expect } = require('@playwright/test');

test('Homepage should load with background image, logo, and dropdown', async ({ page }) => {

    await page.goto('https://privacy.amexgbt.com/');
    await page.waitForSelector('.hero-video.hidden-xs');
    await page.waitForSelector('#header');
    await page.waitForSelector('#language-selector')
    await page.click('#language-selector');
  });

test.skip("HomePage Dropdown should show all the languges available in the application",async({page})=>{

    await page.goto("https://privacy.amexgbt.com/")
    const value=await page.locator("#language-selector").textContent();
    await expect(value.includes("English","Danish","Chinese (Simplified)","Chinese (Traditional)","Czech","Dutch"
    ,"Finnish","French","French (Canada)","German","Hungarian","Italian","Japanese","Norwegian","Polish","Slovak"
    ,"Spanish (Latin America)","Spanish (Spain)","Swedish","Thai","Vietnamese")).toBeTruthy();

});

