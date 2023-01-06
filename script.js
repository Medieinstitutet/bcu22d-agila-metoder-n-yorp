const searchLocation = document.getElementById("searchLocation");
const currentPositionFailure = document.createElement("p");
const userSelection = document.getElementById("userSelection");
const mapContainer = document.getElementById("mapContainer")

function startMap() {
  const position = new google.maps.LatLng(62.27412, 15.2066);
  const map = new google.maps.Map(mapContainer, {
    center: position,
    zoom: 4,
  });
}

let userPosition = {
  lat: 0,
  lng: 0,
};

// Koll om GPS-stöd finns
searchLocation.addEventListener('click', function askForPermission () {
  navigator.geolocation.getCurrentPosition(positionSuccess, error);
});

// Position hittad
function positionSuccess(position) {
  userPosition.lat = position.coords.latitude;
  userPosition.lng = position.coords.longitude;
  currentPositionFailure.style.display = 'none';
  initMap();
}

// Hittade ingen position
function error () {
  userSelection.appendChild(currentPositionFailure);
  currentPositionFailure.innerHTML = 'Your location could not be found.' + '<br>' + 'Activate your location services.';
};

// Skapa karta
function initMap() {
  const position = new google.maps.LatLng(userPosition.lat, userPosition.lng);
  const map = new google.maps.Map(mapContainer, {
    center: position,
    zoom: 12,
  });

  // Leta närliggande restauranger inom radie utifrån användarens position
  const request = {
    location: position,
    radius: "1500",
    type: ["restaurant"],
    // Open restaurants only
  };

// Search for restaurants
  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, handleResults);

// Add restaurants to map
  function handleResults(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results)
      for (let i = 0; i < results.length; i++) {
        var restaurant = results[i];
        const position = { lat: restaurant.geometry.location.lat(), lng: restaurant.geometry.location.lng() }

        const marker = new google.maps.Marker({
          position: position,
          map: map,
          title: restaurant.name,
        });
        
        // Info window
        const infoWindow = new google.maps.InfoWindow();
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      }
    }
  }
}

window.onload = startMap;
window.initMap = initMap;
