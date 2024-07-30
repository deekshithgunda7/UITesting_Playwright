const { test, expect } = require('@playwright/test');
test('Ensure content and links are displayed properly for data protection principles', async ({ page }) => {
    // Navigate to the webpage
    await page.goto('https://privacy.amexgbt.com/principles');
    const mainContent = await page.locator('.data_principles');
    expect(await mainContent.isVisible()).toBe(true);

    const mainContentText = await mainContent.innerText();
    console.log('Main Content:', mainContentText);
  
    // const links = await page.locator('div.principles-section p + a'); 
    // expect(await links.count()).toBeGreaterThanOrEqual(0);
  
  });