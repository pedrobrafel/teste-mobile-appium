// wdio.conf.js
const allure = require('allure-commandline')
const { join } = require('path')

exports.config = {
    baseUrl: 'http://localhost',
    port: 4723,
    path: '/wd/hub',
    udid: "emulator-5554",
    waitForTimeout: 999999,
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "8.0",
        "appium:deviceName": "Pixel 2 API 26",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './app/android/loja-ebac.apk'),
        "appium:appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        "appium:newCommandTimeout": 999
    }],
    mochaOpts: {
        timeout: 999999
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}