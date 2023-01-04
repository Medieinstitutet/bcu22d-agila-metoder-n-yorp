const searchLocation = document.getElementById("searchLocation");
const currentPositionFailure = document.createElement("p");
const content = document.getElementById("content");

searchLocation.addEventListener('click', function askForPermission () {
    navigator.geolocation.getCurrentPosition(success, error);
  });
  
  function success (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    currentPositionFailure.style.display = 'none';
  };
  
  function error () {
    content.appendChild(currentPositionFailure);
    currentPositionFailure.innerHTML = 'Your location could not be found.' + '<br>' + 'Activate your location services.';
  };

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;