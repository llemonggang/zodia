$( document ).ready(function() {
    apodImage()
    phaseMoon()

});

function apodImage() {

    $.ajax({
    url:'https://api.nasa.gov/planetary/apod?api_key=xuyKIKtLax8H6CW7EP8vIJeDEZbLqga6rLLBOVD2',
    }).done(function(data) {
      var img = $('.image').html('<img src="' + data.url + '" />')
    });

}

function phaseMoon() {

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

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
    console.log(today);

          // var output = document.getElementById("out");
          $.ajax({
          url:'https://api.aerisapi.com/sunmoon/?p=' + latitude + ',' + longitude + '&to=:' + today + '&client_id=id5zV9deaqOeGuK3mYadq&client_secret=Yfvc6cceJpNkt5aqmJB5i30VV1WfmS6z75d3hWRy',
          today: today,
          latitude: latitude,
          longitude: longitude
          }).done(function(data) {
          var moon = $('.moon').html(data.response['0'].moon.phase.name);
          return moon;
          });

  };

  navigator.geolocation.getCurrentPosition(success);

}
