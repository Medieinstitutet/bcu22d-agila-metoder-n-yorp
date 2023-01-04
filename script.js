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
  const position = new google.maps.LatLng(userPosition.lat, userPosition.lng);
  const map = new google.maps.Map(document.getElementById("mapContainer"), {
    center: position,
    zoom: 15,
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
