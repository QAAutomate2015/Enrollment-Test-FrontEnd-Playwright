// Example configuration, replace with your actual configuration
const config = {
    development: {
        baseUrl: 'http://localhost:3000',
        username: 'dev_user',
        password: 'dev_password'
    },
    production: {
        baseUrl: 'https://enrollment.com',
        username: process.env.PROD_USERNAME,
        password: process.env.PROD_PASSWORD
    }
};

// Get the current environment (default to development if not set)
const env = process.env.NODE_ENV || 'development';

// Export the configuration for the current environment
module.exports = config[env];