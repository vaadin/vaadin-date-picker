var envIndex = process.argv.indexOf('--env') + 1;
var env = envIndex ? process.argv[envIndex] : undefined;

// workaround for Android 7+ blocking all HTTP traffic
// see https://wiki.saucelabs.com/display/DOCS/Known+Issues
// add it to your own local `/etc/hosts` to run SauceLabs tests locally
var tunneledLocalhost = 'localhost-for-saucelabs';

module.exports = {
  testTimeout: 180 * 1000,
  verbose: false,
  plugins: {
    local: {
      browserOptions: {
        chrome: [
          'headless',
          'disable-gpu',
          'no-sandbox'
        ]
      }
    },
    // MAGI REMOVE START
    istanbul: {
      dir: './coverage',
      reporters: ['text-summary', 'lcov'],
      include: [
        '**/vaadin-accordion/src/*.html'
      ],
      exclude: [],
      thresholds: {
        global: {
          statements: 98
        }
      }
    }
    // MAGI REMOVE END
  },

  registerHooks: function(context) {
    const testBrowsers = [
      {
        deviceName: 'Android GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '11.0',
        browserName: 'Chrome',
      },
      'iOS Simulator/iphone@10.3', // should be 9.x, but SauceLabs does not provide that
      'macOS 11/safari@latest',
      'Windows 10/microsoftedge@latest',
      'Windows 10/microsoftedge@18',
      'Windows 10/internet explorer@11',
      'Windows 10/chrome@latest',
      'Windows 10/firefox@latest',
      'Windows 10/firefox@78', // latest ESR as of 2021-06-30
    ];

    if (env === 'saucelabs') {
      context.options.webserver = context.options.webserver || {};
      context.options.webserver.hostname = tunneledLocalhost;
      context.options.plugins.sauce.tunnelOptions = {
        tunnelDomains: tunneledLocalhost
      };

      context.options.plugins.sauce.browsers = testBrowsers;
    }
  }
};
