module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.test.js'
    ],
    tests: [
      'src/**/*.test.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    setup: function () {
      require.extensions['.css'] = function () {return null;};
      require.extensions['.png'] = function () {return null;};
      require.extensions['.jpg'] = function () {return null;};
      
      var jsdom = require('jsdom').jsdom;

      var exposedProperties = ['window', 'navigator', 'document'];

      global.document = jsdom('');
      global.window = document.defaultView;
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          exposedProperties.push(property);
          global[property] = document.defaultView[property];
        }
      });

      global.navigator = {
        userAgent: 'node.js'
      };
    }
  };
};
