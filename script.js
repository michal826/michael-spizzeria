$(document).ready(function(){
 $('ul li').click(function(){
    // This function will be called every time one of the tabs is clicked
    
    var clicked_tab = $(this);
    
    // TODO Complete the next line to add the active class to the clicked tab: 
    clicked_tab.addClass('active');
    
    // TODO Complete the next line to remove the active class from the rest:
    clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');
    var clicked_href=$(this).children('a').attr('href');
    $('img').hide();
    $(clicked_href).show();
    
});  
<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Try It</button>

<p id="demo"></p>

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(40.7298411, -73.99347329999999), zoom: 20
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
    
    
    
    
    
    
    
    
    
    
    
    
});