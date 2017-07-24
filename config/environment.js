/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'a55-lab-institutional-web',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    pace: {

      // addon-specific options to configure theme
      theme: 'corner-indicator',
      color: 'black',

      // pace-specific options
      // learn more on http://github.hubspot.com/pace/#configuration
      //           and https://github.com/HubSpot/pace/blob/master/pace.coffee#L1-L72
      catchupTime: 50,
      initialRate: .01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: {
        checkInterval: 100,
        selectors: ['body', '.ember-view']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        trackWebSockets: true,
        ignoreURLs: []
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    gReCaptcha: {
          siteKey: '6Le7LyoUAAAAADKfunnPIWlhjOU2AvaA4DNX3enH'
        }

  };

  // ENV['ember-cli-gtm'] = {
  //   appId: 'GTM-M584M2R',
  //   enabled: true

  ENV['ember-cli-gtm'] = {
    appId: 'GTM-P62ZBH4'
  };

  if (environment === 'development') {
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = null;
    ENV.locationType = 'hash';
  }

  return ENV;
};
