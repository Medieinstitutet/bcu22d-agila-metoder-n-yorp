
// Funkar ej!
// function getAPI() {
//   const geolocation =
//     "https://maps.googleapis.com/maps/api/js?key=AIzaSyChdFfavjaelMj60ZVsHfucDjHmIe1Myb0&callback=initMap";
//   fetch(geolocation)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

let userPosition = {
  lat: 0,
  lng: 0,
};

// Koll om GPS-stöd finns
if (navigator.geolocation) {
  // Stöd finns för GPS, hämta användarens position
  const currentPosition = navigator.geolocation.getCurrentPosition(
    positionSuccess,
    positionFailed
  );
}

// Position hittad
function positionSuccess(position) {
  userPosition.lat = position.coords.latitude;
  userPosition.lng = position.coords.longitude;

  initMap();
}

// Hittade ingen position
function positionFailed() {
  console.error("Kunde inte hitta din aktuella position.");
}

// Skapa karta
function initMap() {
  const position = new google.maps.LatLng(59.3350995004924, 18.126819556283753);
  const map = new google.maps.Map(document.getElementById("mapContainer"), {
    center: position,
    zoom: 5,
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

const searchLocation = document.getElementById("searchLocation");
const currentPositionFailure = document.createElement("p");
const userSelection = document.getElementById("userSelection");

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
    userSelection.appendChild(currentPositionFailure);
    currentPositionFailure.innerHTML = 'Your location could not be found.' + '<br>' + 'Activate your location services.';
  };

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
  
  window.initMap = initMap;
