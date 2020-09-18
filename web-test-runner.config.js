/* eslint-env node */
const { createSauceLabsLauncher } = require('@web/test-runner-saucelabs');

const config = {
  nodeResolve: true,
  testsFinishTimeout: 60000,
  coverageConfig: {
    include: ['**/src/*'],
    threshold: {
      statements: 90,
      branches: 50,
      functions: 90,
      lines: 90
    }
  }
};

if (process.env.TEST_ENV === 'sauce') {
  const sauceLabsLauncher = createSauceLabsLauncher({
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY
  });

  const sharedCapabilities = {
    'sauce:options': {
      name: 'vaadin-date-picker unit tests',
      build: `build ${process.env.TRAVIS_JOB_NUMBER || ''}`
    }
  };

  config.concurrency = 1;
  config.browsers = [
    sauceLabsLauncher({
      ...sharedCapabilities,
      browserName: 'safari',
      platform: 'macOS 10.14',
      version: '13'
    }),
    sauceLabsLauncher({
      ...sharedCapabilities,
      browserName: 'safari',
      platform: 'iOS Simulator',
      version: '13.1'
    })
  ];
}

module.exports = config;
