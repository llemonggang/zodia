$( document ).ready(function() {
  $('#daily-blurb').hide()
  $('#navbar').hide()
  // phaseMoon()
  // infoBox()

  $.ajax({
  url:'https://zodia.herokuapp.com/zodiac',
  }).done(function(data) {

    key = {
      'aries': 0,
      'taurus': 1,
      'gemini': 2,
      'cancer': 3,
      'leo': 4,
      'virgo': 5,
      'libra': 6,
      'scorpio': 7,
      'sagittarius': 8,
      'capricorn': 9,
      'aquarius': 10,
      'pisces': 11
    }

  //making icon "current" on click
    $('.sign').click(function() {
      var sign = $(this).data('sign');
      var currentSign = data[key[sign]];
      $('#ring').hide()
      $('.site-name').hide()
      $('.navbar').show()
      // $('.daily-blurb').html('<p>' + currentSign.Daily_Horoscope + '</p>')
      showContent(currentSign)
    });

    function showContent(data) {
      $('.wellness-blurb').html('<p>' + data.Wellness + '</p>')
      $('.career-blurb').html('<p>' + data.Career + '</p>')
      $('.love-blurb').html('<p>' + data.Love + '</p>')
      $('.sun-sign').html('<p class="current">' + data.Sign + '</p>')
      $('.daily-blurb').html('<p>' + data.Daily_Horoscope + '<p/>')
      console.log(data.Career);
      $('.ring').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily-blurb').show();
    };

  //removing "current" class on return to homepage
    $('.circle-icon').click(function() {
      $('.current').removeClass( "current" );
      $('.navbar').hide()
      $('.ring').show()
      $('.site-name').show()
    })
  });

});

// function phaseMoon() {
//
//   navigator.geolocation.getCurrentPosition(success);
//
//   function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth()+1;
//
//     var yy = today.getFullYear();
//       if(dd<10){
//           dd='0'+dd
//       }
//       if(mm<10){
//           mm='0'+mm
//       }
//     var today = dd+'/'+mm+'/'+yy;
//     var date = $('#date').html(today);
//
//     $.ajax({
//     url:'https://api.aerisapi.com/sunmoon/?p=' + latitude + ',' + longitude + '&to=:' + today + '&client_id=id5zV9deaqOeGuK3mYadq&client_secret=Yfvc6cceJpNkt5aqmJB5i30VV1WfmS6z75d3hWRy',
//     today: today,
//     latitude: latitude,
//     longitude: longitude
//     }).done(function(data) {
//     var moon = $('.moonphase').text(data.response['0'].moon.phase.name);
//     var sunrise = ($('.sunrise').text(data.response['0'].sun.riseISO)).text();
//     var sunset = ($('.sunset').text(data.response['0'].sun.setISO)).text();
//     var rise = $('.sunrise').html('<p>rise ' + sunrise.substr(11, 8));
//     var set = $('.sunset').html('<p>set ' + sunset.substr(11, 8));
//
//       switch(moon.html()) {
//         case 'waxing gibbous':
//             $('.moon-icon').html('<img src="./images/waxing-gibbous.png" class="moon-icon" />');
//             break;
//         case 'waning gibbous':
//             $('.moon-icon').html('<img src="./images/waning-gibbous.png" class="moon-icon" />')
//             break;
//         case 'waxing crescent':
//             $('.moon-icon').html('<img src="./images/waxing-crescent.png" class="moon-icon" />')
//             break;
//         case 'waning crescent':
//             $('.moon-icon').html('<img src="./images/waning-crescent.png" class="moon-icon" />')
//             break;
//         case 'full moon':
//             $('.moon-icon').html('<img src="./images/full.png" class="moon-icon" />')
//             break;
//         case 'new moon':
//             $('.moon-icon').html('<img src="./images/new.png" class="moon-icon" />')
//             break;
//         case 'first moon':
//             $('.moon-icon').html('<img src="./images/first.png" class="moon-icon" />')
//             break;
//         case 'last moon':
//             $('.moon-icon').html('<img src="./images/last.png" class="moon-icon"/>')
//             break;
//         }
//     });
//   };
// }
//
// function infoBox() {
//   $('.moon-icon').click(function() {
//         $('.moonphase').show()
//         $('.sunrise').hide()
//         $('.sunset').hide()
//     });
//   $('.sun-icon').click(function() {
//     $('.sunrise').show()
//     $('.sunset').show()
//     $('.moonphase').hide()
//   });
// };
