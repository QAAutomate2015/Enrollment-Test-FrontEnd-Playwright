class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://example.com/login');
    }

    async isLoginSuccessful() {
        // Check if user is logged in by verifying presence of dashboard element
        return await this.page.waitForSelector('.dashboard');
    }
}

module.exports = LoginPage;