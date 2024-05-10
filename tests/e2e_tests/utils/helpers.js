// Example utility functions, replace with your actual helper functions
async function login(page, username, password) {
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('button[type="submit"]');
}

module.exports = { login };