const { test, expect } = require('@playwright/test');
const LoginPage = require('../page_objects/login_page');
const DashboardPage = require('../page_objects/dashboard_page');
const { getConfig } = require('../utils/config');
const { login } = require('../utils/helpers');

test.describe('Login and Dashboard Tests', () => {
    let loginPage;
    let dashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        await loginPage.open();
    });

    test('User can login and see the dashboard', async ({ page }) => {
        const { username, password } = getConfig();

        // Using the login function from helpers.js
        await login(page, username, password);
        
        // Check if login was successful
        expect(await loginPage.isLoginSuccessful()).toBeTruthy();

        // Check if dashboard is open
        expect(await dashboardPage.isOpen()).toBeTruthy();
    });
});