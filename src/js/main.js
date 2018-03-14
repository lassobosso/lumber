var LUMBER = window.LUMBER || {};

LUMBER.main = (function() {
  var init = function() {

    // timer
    // Set the date we're counting down to
    var countDownDate = new Date('Sep 1, 2018 10:00:00').getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      $('.timer').text(days + ' days ' + hours + ' hours ' +
        minutes + ' minutes ' + seconds + ' seconds ');


    }, 1000);

    var vids = ['jim_punk_2', 'Reggae'];
    var vid = vids[Math.floor(Math.random() * 2)];
    var el = $('video');
    var props = [{ 'suffix': '.mp4', 'type': 'mp4' },
      { 'suffix': '.webm', 'type': 'webm' },
      { 'suffix': '.ogv', 'type': 'ogg' }
    ];

    for (var i = 0; i < props.length; i++) {
      var curr = props[i];
      el.append($('<source src="videos/' + vid + curr.suffix + '" type="video/' + curr.type + '">'));

    }



  };

  return {
    init: init
  };
})();

LUMBER.main.init();