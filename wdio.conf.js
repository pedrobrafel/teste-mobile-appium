const {join} = require('path')

exports.config = {
    baseUrl: 'http://localhost',
    port: 4723,
    path: '/wd/hub',
    timeout: 99999999,
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [
        {
            "platformName": "Android",
            "appium:platformVersion": "8.0",
            "appium:deviceName": "Pixel 2 API 26",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(),'./app/android/webdemo.apk'),
            "appium:appActivity":".MainActivity"
        }
    ]
}