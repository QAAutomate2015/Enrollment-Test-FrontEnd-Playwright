const config = require('../utils/config');

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(loginUrl);
    }

    async isLoginSuccessful() {
        // Check if user is logged in by verifying presence of dashboard element
        return await this.page.waitForSelector('.dashboard');
    }
}

module.exports = LoginPage;