$( document ).ready(function() {
    $('.daily').hide()
    // apodImage()
    phaseMoon()
    horoscope()
});

function apodImage() {
    $.ajax({
    url:'https://api.nasa.gov/planetary/apod?api_key=xuyKIKtLax8H6CW7EP8vIJeDEZbLqga6rLLBOVD2',
    }).done(function(data) {
    $('#image').html('<img src="' + data.url + '" />');
    });
}

function phaseMoon() {

  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude, longitude);

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;

    var yyyy = today.getFullYear();
      if(dd<10){
          dd='0'+dd
      }
      if(mm<10){
          mm='0'+mm
      }
    var today = dd+'/'+mm+'/'+yyyy;
    var date = $('#date').html(today);

    $.ajax({
    url:'https://api.aerisapi.com/sunmoon/?p=' + latitude + ',' + longitude + '&to=:' + today + '&client_id=id5zV9deaqOeGuK3mYadq&client_secret=Yfvc6cceJpNkt5aqmJB5i30VV1WfmS6z75d3hWRy',
    today: today,
    latitude: latitude,
    longitude: longitude
    }).done(function(data) {
    var moon = $('.moon').text(data.response['0'].moon.phase.name);

      switch(moon.html()) {
        case 'waxing gibbous':
            $('.icon').html('<img src="./images/waxing-gibbous.png" class="icon" />');
            break;
        case 'waning gibbous':
            $('.icon').html('<img src="./images/waning-gibbous.png" class="icon" />')
            break;
        case 'waxing crescent':
            $('.icon').html('<img src="./images/waxing-crescent.png" class="icon" />')
            break;
        case 'waning crescent':
            $('.icon').html('<img src="./images/waning-crescent.png" class="icon" />')
            break;
        case 'full moon':
            $('.icon').html('<img src="./images/full.png" class="icon" />')
            break;
        case 'new moon':
            $('.icon').html('<img src="./images/new.png" class="icon" />')
            break;
        case 'first moon':
            $('.icon').html('<img src="./images/first.png" class="icon" />')
            break;
        case 'last moon':
            $('.icon').html('<img src="./images/last.png" class="icon"/>')
            break;
        }
    });
  };
}

function horoscope() {
  $.ajax({
  url:'http://www.api.littleastro.com/restserver/index.php/api/horoscope/readings/format/json',
  }).done(function(data) {
  console.log(data);

    $('.cancer').click(function(e) {
      e.preventDefault()
      var cancer = data[3].Daily_Horoscope;
      $('.daily').html('<p>' + cancer + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.leo').click(function(e) {
      e.preventDefault()
      var leo = data[4].Daily_Horoscope;
      $('.daily').html('<p>' + leo + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.virgo').click(function(e) {
      e.preventDefault()
      var virgo = data[5].Daily_Horoscope;
      $('.daily').html('<p>' + virgo + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.libra').click(function(e) {
      e.preventDefault()
      var libra = data[6].Daily_Horoscope;
      $('.daily').html('<p>' + libra + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.scorpio').click(function(e) {
      e.preventDefault()
      var scorpio = data[7].Daily_Horoscope;
      $('.daily').html('<p>' + scorpio + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.sagittarius').click(function(e) {
      e.preventDefault()
      var sagittarius = data[8].Daily_Horoscope;
      $('.daily').html('<p>' + sagittarius + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.capricorn').click(function(e) {
      e.preventDefault()
      var capricorn = data[9].Daily_Horoscope;
      $('.daily').html('<p>' + capricorn + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.aquarius').click(function(e) {
      e.preventDefault()
      var aquarius = data[10].Daily_Horoscope;
      $('.daily').html('<p>' + aquarius + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.pisces').click(function(e) {
      e.preventDefault()
      var pisces = data[11].Daily_Horoscope;
      $('.daily').html('<p>' + pisces + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.aries').click(function(e) {
      e.preventDefault()
      var aries = data[0].Daily_Horoscope;
      $('.daily').html('<p>' + aries + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.taurus').click(function(e) {
      e.preventDefault()
      var taurus = data[1].Daily_Horoscope;
      $('.daily').html('<p>' + taurus + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
    $('.gemini').click(function(e) {
      e.preventDefault()
      var gemini = data[2].Daily_Horoscope;
      $('.daily').html('<p>' + gemini + '<p/>')
      $('.circle-container').hide();
      $('.daily').show();
      console.log('working');

    })
  });
}
