import * as path from 'path';
import { browser , Config} from "protractor";

export const config: Config = {

// seleniumAddress: "https://127.0.0.1:4444/wd/hub",
 directConnect: true,
SELENIUM_PROMISE_MANAGER: false,

multiCapabilities: [
    {
        "browserName": "chrome",
        "acceptInsecureCerts" : true,
        "chromeOptions": {
            binary: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            args: [ "--no-sandbox",
                    "--disbale-dev-shm-usage",
                    "--disable-infobars",
                    "--disbale-notification",
                    "--allow-insecure-localhost"
            ]
        }
    },
    // {
    //     "browserName": "firefox",
    //     "moz:firefoxOptions": {
    //         args: [ "--no-sandbox",
    //                 "--disbale-dev-shm-usage",
    //                 "--disable-infobars",
    //                 "--disbale-notification",
    //                 "--allow-insecure-localhost"
    //     ]
    // }

    // }
],
maxSessions: 1, // to ensure that browsers open sequentially during multi-browser testing   
framework: "custom",
frameworkPath: require.resolve("protractor-cucumber-framework"),
specs: [
    "../../features/AmazonLogin.feature"
],
onPrepare: () => {
    browser.ignoreSynchronization = true; // for non -angular websites
    browser.manage().window().maximize;
},
cucumberOpts: {
    compiler: "ts:ts-node/register",
    // format: "json:./reports/json/cucumber_report.json",
    require: [],
    strict: true,
    //tags:
}


}