$( document ).ready(function() {
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
  });
}
