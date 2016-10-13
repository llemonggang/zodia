$( document ).ready(function() {
    $('.daily').hide()
    $('.back').hide()
    $('.navbar').hide()
    $('.moonphase').hide()
    $('.sunrise').hide()
    $('.sunset').hide()
    $('.love-icon').hide()
    // apodImage()
    phaseMoon()
    horoscope()
    infoBox( )
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
  url:'https://zodia.herokuapp.com/zodiac',
}).done(function(data) {
    console.log(data);

    var cancer = data[3];
    var leo = data[4];
    var virgo = data[5];
    var libra = data[6];
    var scorpio = data[7];
    var sagittarius = data[8];
    var capricorn = data[9];
    var aquarius = data[10];
    var pisces = data[11];
    var taurus = data[1];
    var gemini = data[2];

    $('.cancer').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + cancer.Love + '</p>')
      $('.sun-sign').html('<p class="current">' + cancer.Sign + '</br>' + cancer.Info + '<p/>')
      $('.daily').html('<p>' + cancer.Daily_Horoscope + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.sun-sign').show()
      $('.daily').show()
      $('.back').show()
    })

    $('.leo').click(function(e) {
      $('.daily').hide()
      $('.love-blurb').html('<p>' + leo.Love + '</p>')
      $('.sun-sign').html('<p class="current">' + leo.Sign + '</br>' + leo.Info + '</p>')
      $('.daily').html('<p>' + leo.Daily_Horoscope + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.virgo').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + virgo.Love + '</p>')
      $('.daily').html('<p>' + virgo.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + virgo.Sign + '</br>' + virgo.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.libra').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + libra.Love + '</p>')
      $('.daily').html('<p>' + libra.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + libra.Sign + '</br>' + libra.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.scorpio').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + scorpio.Love + '</p>')
      $('.daily').html('<p>' + scorpio.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + scorpio.Sign + '</br>' + scorpio.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.sagittarius').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + sagittarius.Love + '</p>')
      $('.daily').html('<p>' + sagittarius.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + sagittarius.Sign + '</br>' + sagittarius.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.capricorn').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + capricorn.Love + '</p>')
      $('.daily').html('<p>' + capricorn.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + capricorn.Sign + '</br>' + capricorn.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.aquarius').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + aquarius.Love + '</p>')
      $('.daily').html('<p>' + aquarius.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + aquarius.Sign + '</br>' + aquarius.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.pisces').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + pisces.Love + '</p>')
      $('.daily').html('<p>' + pisces.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + pisces.Sign + '</br>' + pisces.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.aries').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + aries.Love + '</p>')
      $('.daily').html('<p>' + aries.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + aries.Sign + '</br>' + aries.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.taurus').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + taurus.Love + '</p>')
      $('.daily').html('<p>' + taurus.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + taurus.Sign + '</br>' + taurus.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.gemini').click(function(e) {
      e.preventDefault()
      $('.love-blurb').html('<p>' + gemini.Love + '</p>')
      $('.daily').html('<p>' + gemini.Daily_Horoscope + '<p/>')
      $('.sun-sign').html('<p class="current">' + gemini.Sign + '</br>' + gemini.Info + '<p/>')
      $('.circle-container').hide();
      $('.site-name').hide()
      $('.love-icon').show()
      $('.love-blurb').hide()
      $('.navbar').show()
      $('.sun-sign').show()
      $('.daily').show();
      $('.back').show()
    })

    $('.love-icon').click(function(e) {
      e.preventDefault()
      $('.daily').hide()
      $('.love-blurb').show()
      $('.daily').html($('.current').sign)
    })

  })
};

function infoBox() {
  $('.moon-icon').click(function() {
        $('.moonphase').show()
    })
  $('.sun-icon').click(function() {
    $('.sunrise').show()
    $('.sunset').show()
  })
};
