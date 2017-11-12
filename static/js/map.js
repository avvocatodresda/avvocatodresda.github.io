function init(){
  var mapOptions = {
    center: new google.maps.LatLng(40.654953,17.709360),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript(){
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBsPJ2w1zezsEH6VOSuoKcGPWtUaTg6R38&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript();
