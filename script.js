const searchLocation = document.getElementById("searchLocation");
const currentPositionFailure = document.createElement("p");
const userSelection = document.getElementById("userSelection");

function startMap() {
  const position = new google.maps.LatLng(62.27412, 15.2066);
  const map = new google.maps.Map(document.getElementById("mapContainer"), {
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
  const map = new google.maps.Map(document.getElementById("mapContainer"), {
    center: position,
    zoom: 12,
  });

  // Leta närliggande restauranger inom radie utifrån användarens position
  const request = {
    location: position,
    radius: "500",
    type: ["restaurant"],
  };

  // Gör en sökning… vänta på resultaten
  const service = new google.maps.places.PlacesService(mapContainer);
  service.nearbySearch(request, handleResults);
}

// Skriv ut resultaten på kartan
function handleResults(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      // printa en kartnål
    }
  }
}



  
  

// Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.031 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }
  window.onload = startMap;
 // window.initMap = initMap;
