// dashboard_page.js

class DashboardPage {
    constructor(page) {
        this.page = page;
    }

    async isOpen() {
        // Check if the dashboard page is open by verifying the presence of its unique element
        return await this.page.waitForSelector('.dashboard');
    }
}

module.exports = DashboardPage;