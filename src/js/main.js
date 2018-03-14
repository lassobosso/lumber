var LUMBER = window.LUMBER || {};

LUMBER.main = (function() {
  var init = function() {
    console.log('new main!');
  };

  return {
    init: init
  };
})();

LUMBER.main.init();