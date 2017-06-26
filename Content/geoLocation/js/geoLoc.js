/*<!--Read Places from file, calc Distance, Displau in Table-->*/
    var currLat = -33.893887;   //Changed when Location is Updated
    var currLong = 18.440708;
    var places;/* = arr;*/

    function myPlaces(arr) {
        places = arr;
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++)
        {

            /*Split latlong*/
            var latlong = arr[i].latlong;
            var index = latlong.indexOf(",");   // Get first comma index
            var lat = latlong.substr(0, index); // store lat before comma
            var long = latlong.substr(index + 1);  // store long after comma

            /*Calc Distance in Km, Convert to Mi, M, Display in Table*/
            var pKm = calcDistance(currLat, currLong, lat, long);
            arr[i].DKm = pKm.toFixed(2);
            arr[i].DMi = (pKm * 0.62137).toFixed(2);
            arr[i].DM  = (pKm * 1000).toFixed(2);
            out+='  <tr class="'+'rowp'+'"'+'>'
               +'      <td>'+(i+1)+'</td>'
               +'      <td>'+arr[i].name+'</td>'
               +'      <td>'+arr[i].latlong+'</td>'
               +'      <td>'+arr[i].rating+'</td>'
               +'      <td class="'+'DMi'+'"'+'>'+arr[i].DMi+'</td>'
               +'      <td class="'+'DKm'+'"'+'>'+arr[i].DKm+'</td>'
               +'      <td class="'+'DM'+'"'+'>'+arr[i].DM+'</td>'
               +'  </tr>';
        }
        /*alert("making call")*/
        document.getElementById("tbl").innerHTML = out;
    }

    /*calcDistance(-33.893887, 18.440708, -26.0594802, 28.0609437).toFixed(1);*/
    function calcDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var pKm = R * c; // Distance in km
        return pKm;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    //Attempt to get Geo Location, show on map if granted access else show error
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

    /*Update 'Your Location' text, Display map with marker, make call to update distances to Updated Location*/
    function showPosition(position)
    {
        var geoPoint = position.coords.latitude + "," + position.coords.longitude;
        var status = document.getElementById("lblLocation");
        status.innerHTML = "Your Location: <br/> Latitude: " + position.coords.latitude + "<br/>Longitude: " + position.coords.longitude;
        /*Update Current Latitude & Longitude Coordinates*/
        currLat = position.coords.latitude;
        currLong = position.coords.longitude;
        // Get a nice map tile from google maps
        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" +
            geoPoint + "&zoom=14&size=400x300&maptype=roadmap&markers=color:red%7Clabel:A%7C" + geoPoint + "&sensor=false";  /*geoPoint =atitude ,longitude*/
        document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";

        /*Call Function to Update Table with Distance from Updated Location*/
        myPlaces(places);
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


