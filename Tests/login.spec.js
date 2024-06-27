const { chromium } = require('playwright');

(async () => {
    // Launch the browser
    const browser = await chromium.launch({ headless: false }); // Set headless to true if you don't need a visible browser
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to Asana login page
    await page.goto('https://app.asana.com/-/login');

    // Input email
    await page.fill('input[type="email"]', 'ben+pose@workwithloop.com');

    // Click on the 'Continue' button (or equivalent) if needed
    await page.click('//*[@id="Login-appRoot"]/div/div[2]/div/div/form/div[2]');

    // Wait for the password field to appear
    await page.waitForSelector('input[type="password"]');

    // Input password
    await page.fill('input[type="password"]', 'Password123');

    // Click on the 'Log in' button
    await page.click('//*[@id="Login-appRoot"]/div/div[2]/div[2]/form/div[2]');

    // Add a wait to see the result (can be adjusted or removed)
    await page.waitForTimeout(5000);

    // Close the browser
    await browser.close();
})();