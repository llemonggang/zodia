$( document ).ready(function() {
    console.log( "ready!" );
    apodImage()
      getLoc()
    // phaseMoon



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

// function phaseMoon() {
//   $('.preview').on('click', function(e) {
//     e.preventDefault()
//     $.ajax({
//     url:'http://api.usno.navy.mil/rstt/oneday?,
//     date:
//     loc:
//   }).done(function(data) {
//     //response
//   });
// }

function getLoc() {
  var loc = navigator.geolocation.watchPosition();
  // var latitude = position.coords.latitude;
  // var longitude = position.coords.longitude;
  // console.log(loc);
}
