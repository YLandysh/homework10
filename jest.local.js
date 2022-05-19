module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default'],
    moduleFileExtensions: ['js', 'json'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/specs/*.spec.*'],
    globals: {
        testTimeout: 50000,
    },
    verbose: true,
    testRunner: "jest-jasmine2",
    reporters: ["default", "jest-allure"],
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }],
        "default",
        "jest-html-reporters"
    ],
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html",
            "openReport": true
        }]
    ]
};

