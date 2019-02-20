"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    multiCapabilities: [
        {
            "browserName": "chrome",
            "acceptInsecureCerts": true,
            "chromeOptions": {
                binary: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
                args: ["--no-sandbox",
                    "--disbale-dev-shm-usage",
                    "--disable-infobars",
                    "--disbale-notification",
                    "--allow-insecure-localhost"
                ]
            }
        },
    ],
    maxSessions: 1,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../../features/AmazonLogin.feature"
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize;
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: [],
        strict: true,
    }
};
