// login_steps.js

const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../page_objects/login_page');
const { DashboardPage } = require('../page_objects/dashboard_page');
const { login } = require('../utils/helpers');

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I enter valid username and password', async () => {
    const { username, password } = getConfig();
    await login(username, password);
});

Then('I should be redirected to the dashboard', async () => {
    const dashboardPage = new DashboardPage(page);
    expect(await dashboardPage.isOpen()).toBeTruthy();
});