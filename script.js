$( document ).ready(function() {
    $('.daily').hide()
    $('.back').hide()
    $('.navbar').hide()
    $('.moonphase').hide()
    $('.sunrise').hide()
    $('.sunset').hide()
    // $('.info').hide()
    // apodImage()
    phaseMoon()
    horoscope()
});

function apodImage() {
    $.ajax({
    url:'https://api.nasa.gov/planetary/apod?api_key=xuyKIKtLax8H6CW7EP8vIJeDEZbLqga6rLLBOVD2',
    }).done(function(data) {
    $('#image').html('<img src="' + data.url + '" id="image" />');
    });
}

function phaseMoon() {

  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

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
      console.log(data);
    var moon = $('.moonphase').text(data.response['0'].moon.phase.name);
    var sunrise = ($('.sunrise').text(data.response['0'].sun.riseISO)).text();
    var sunset = ($('.sunset').text(data.response['0'].sun.setISO)).text();
    var rise = $('.sunrise').html('<p>rise ' + sunrise.substr(11, 8));
    var set = $('.sunset').html('<p>set ' + sunset.substr(11, 8));

      switch(moon.html()) {
        case 'waxing gibbous':
            $('.moon-icon').html('<img src="./images/waxing-gibbous.png" class="moon-icon" />');
            break;
        case 'waning gibbous':
            $('.moon-icon').html('<img src="./images/waning-gibbous.png" class="moon-icon" />')
            break;
        case 'waxing crescent':
            $('.moon-icon').html('<img src="./images/waxing-crescent.png" class="moon-icon" />')
            break;
        case 'waning crescent':
            $('.moon-icon').html('<img src="./images/waning-crescent.png" class="moon-icon" />')
            break;
        case 'full moon':
            $('.moon-icon').html('<img src="./images/full.png" class="moon-icon" />')
            break;
        case 'new moon':
            $('.moon-icon').html('<img src="./images/new.png" class="moon-icon" />')
            break;
        case 'first moon':
            $('.moon-icon').html('<img src="./images/first.png" class="moon-icon" />')
            break;
        case 'last moon':
            $('.moon-icon').html('<img src="./images/last.png" class="moon-icon"/>')
            break;
        }
    });
  };
}

function horoscope() {
  $.ajax({
  url:'http://www.api.littleastro.com/restserver/index.php/api/horoscope/readings/format/json',
  }).done(function(data) {

    $('.cancer').click(function(e) {
      e.preventDefault()
      var cancer = data[3].Daily_Horoscope;
      $('.sun-sign').html('<p>' + data[3].Sign + '</br>' + data[3].Info + '<p/>')
      $('.daily').html('<p>' + cancer + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navnavbar').show()
      $('.sun-sign').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.leo').click(function(e) {
      e.preventDefault()
      var leo = data[4].Daily_Horoscope;
      $('.sun-sign').html('<p>' + data[4].Sign + '</br>' + data[4].Info + '</p>')
      $('.daily').html('<p>' + leo + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.virgo').click(function(e) {
      e.preventDefault()
      var virgo = data[5].Daily_Horoscope;
      $('.daily').html('<p>' + virgo + '<p/>')
      $('.sun-sign').html('<p>' + data[5].Sign + '</br>' + data[5].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.libra').click(function(e) {
      e.preventDefault()
      var libra = data[6].Daily_Horoscope;
      $('.daily').html('<p>' + libra + '<p/>')
      $('.sun-sign').html('<p>' + data[6].Sign + '</br>' + data[6].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.scorpio').click(function(e) {
      e.preventDefault()
      var scorpio = data[7].Daily_Horoscope;
      $('.daily').html('<p>' + scorpio + '<p/>')
      $('.sun-sign').html('<p>' + data[7].Sign + '</br>' + data[7].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.sagittarius').click(function(e) {
      e.preventDefault()
      var sagittarius = data[8].Daily_Horoscope;
      $('.daily').html('<p>' + sagittarius + '<p/>')
      $('.sun-sign').html('<p>' + data[8].Sign + '</br>' + data[8].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.capricorn').click(function(e) {
      e.preventDefault()
      var capricorn = data[9].Daily_Horoscope;
      $('.daily').html('<p>' + capricorn + '<p/>')
      $('.sun-sign').html('<p>' + data[9].Sign + '</br>' + data[9].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.aquarius').click(function(e) {
      e.preventDefault()
      var aquarius = data[10].Daily_Horoscope;
      $('.daily').html('<p>' + aquarius + '<p/>')
      $('.sun-sign').html('<p>' + data[10].Sign + '</br>' + data[10].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.pisces').click(function(e) {
      e.preventDefault()
      var pisces = data[11].Daily_Horoscope;
      $('.daily').html('<p>' + pisces + '<p/>')
      $('.sun-sign').html('<p>' + data[11].Sign + '</br>' + data[11].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.aries').click(function(e) {
      e.preventDefault()
      var aries = data[0].Daily_Horoscope;
      $('.daily').html('<p>' + aries + '<p/>')
      $('.sun-sign').html('<p>' + data[0].Sign + '</br>' + data[0].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.taurus').click(function(e) {
      e.preventDefault()
      var taurus = data[1].Daily_Horoscope;
      $('.daily').html('<p>' + taurus + '<p/>')
      $('.sun-sign').html('<p>' + data[1].Sign + '</br>' + data[1].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
    $('.gemini').click(function(e) {
      e.preventDefault()
      var gemini = data[2].Daily_Horoscope;
      $('.daily').html('<p>' + gemini + '<p/>')
      $('.sun-sign').html('<p>' + data[2].Sign + '</br>' + data[2].Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })
  });
}
