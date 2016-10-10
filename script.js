$( document ).ready(function() {
    console.log( "ready!" );
    apodImage()
    phaseMoon()

});

function apodImage() {
  $('.preview').on('click', function(e) {
    e.preventDefault()
    $.ajax({
    url:'https://api.nasa.gov/planetary/apod?api_key=xuyKIKtLax8H6CW7EP8vIJeDEZbLqga6rLLBOVD2',
    }).done(function(data) {
      var img = $('.image').html('<img src="' + data.url + '" />')
      var explanation = $('.explanation').text(data.explanation)
      return explanation;
  });
  })
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
      // document.getElementById("date").value = today;
      console.log(today);

        $('.preview').on('click', function(today, e) {
          e.preventDefault()

            var output = document.getElementById("out");

          $.ajax({
          url:'https://api.usno.navy.mil/rstt/oneday?date=' + date + '&coords=' + latitude + ',' + longitude,
          date: today,
          latitude: latitude,
          longitude: longitude
          }).done(function(data) {
          console.log(data);
          });
        });

  };

  navigator.geolocation.getCurrentPosition(success);

}
