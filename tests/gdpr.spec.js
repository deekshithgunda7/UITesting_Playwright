const { test, expect } = require('@playwright/test');
test('The content on the cookie page should show properly for GDPR page', async ({ page }) => {
    
    await page.goto('https://privacy.amexgbt.com/gdpr');
    const mainContent = await page.locator('.node__content.clearfix');
    expect(await mainContent.isVisible()).toBe(true);
    const mainContentText = await mainContent.innerText();
    console.log('Main Content:', mainContentText);
  });

