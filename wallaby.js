module.exports = function (w) {

  return {
    files: [
      'src/*.js'
    ],

    tests: [
      'src/*.test.js'
    ],
    teardown: function(){
      delete global.window;
    }
  };
};
