/* eslint-env node */
'use strict';

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/foundation/scss'
      ]
    }
  });
  return mergeTrees([app.toTree()]);
};
