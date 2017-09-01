module.exports = function (w) {

  return {
    files: [
      'src/**/*.js',
      '!src/**/*.test.js'
    ],
    tests: [
      'src/**/*.test.js'
    ],
    testFramework: "mocha",   
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    teardown: function(){
      delete global.window;
    },
    
  };
};
