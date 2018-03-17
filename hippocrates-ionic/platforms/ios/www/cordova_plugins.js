cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "id": "cordova-plugin-ms-azure-mobile-apps.AzureMobileServices.Ext",
        "file": "plugins/cordova-plugin-ms-azure-mobile-apps/www/MobileServices.Cordova.Ext.js",
        "pluginId": "cordova-plugin-ms-azure-mobile-apps",
        "runs": true
    },
    {
        "id": "cordova-plugin-ms-azure-mobile-apps.AzureMobileServices",
        "file": "plugins/cordova-plugin-ms-azure-mobile-apps/www/MobileServices.Cordova.js",
        "pluginId": "cordova-plugin-ms-azure-mobile-apps",
        "clobbers": [
            "WindowsAzure"
        ]
    },
    {
        "id": "cordova-plugin-badge.Badge",
        "file": "plugins/cordova-plugin-badge/www/badge.js",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "cordova.plugins.notification.badge"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-inappbrowser": "1.5.0",
    "cordova-sqlite-storage": "1.4.8",
    "cordova-plugin-ms-azure-mobile-apps": "2.0.0",
    "cordova-plugin-badge": "0.8.7",
    "cordova-plugin-local-notification": "0.9.0-beta.3"
};
// BOTTOM OF METADATA
});