//Attampt to get Geo Location, show on map if granted access else show error

function getGeoLocation() 
{
  if (navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } 
  else
  {
    var status = document.getElementById("lblLocation");
    status.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) 
{
  var geoPoint = position.coords.latitude + "," + position.coords.longitude;
  var status = document.getElementById("lblLocation");
  status.innerHTML = "Your Location: <br/> Latitude: " + position.coords.latitude + "<br/>Longitude: " + position.coords.longitude;

  // Get a nice map tile from google maps
  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" +
     geoPoint + "&zoom=14&size=400x300&maptype=roadmap&markers=color:red%7Clabel:A%7C" + geoPoint + "&sensor=false";  /*geoPoint =atitude ,longitude*/
  document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
} 

/*"https://maps.googleapis.com/maps/api/staticmap?center=" +
geoPoint + "&zoom=14&size=400x300&sensor=false"; */
/*'<img src="https://maps.googleapis.com/maps/api/staticmap?zoom=15&
'size=300x300&maptype=roadmap&markers=color:red%7Clabel:A%7C' + lat + ',' + lng+ '&sensor=false">';*/

// show our errors for debuging
function showError(error) {
  var x = document.getElementById("lblLocation");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Denied the request for Geolocation. Should I ask in a more polite way?"
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred :/";
      break;
  }
}