const { test, expect } = require('@playwright/test');
test('The content on the cookie page should show properly for cookie page', async ({ page }) => {
    
    await page.goto('https://privacy.amexgbt.com/cookies');
    const mainContent = await page.locator('.region.region-content');
    expect(await mainContent.isVisible()).toBe(true);
  
    // Get the text content of the main content
    const mainContentText = await mainContent.innerText();
    console.log('Main Content:', mainContentText);
  });

 