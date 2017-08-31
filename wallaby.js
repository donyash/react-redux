module.exports = function (w) {

  return {
    files: [
      'src/**/*.js',
      '!src/**/*.test.js'
    ],
    tests: [
      'src/**/*.test.js'
    ],
    teardown: function(){
      delete global.window;
    }
  };
};
