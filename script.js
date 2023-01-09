const searchLocation = document.getElementById('searchLocation');
const currentPositionFailure = document.createElement('p');
const userSelection = document.getElementById('userSelection');
const mapContainer = document.getElementById('mapContainer');
const radioButtons = document.getElementsByName('Distance');
const pageContent = document.getElementById('pageContent');
const searchResults = document.getElementById('searchResults');

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

searchResults.remove();

// Koll om GPS-stöd finns
searchLocation.addEventListener('click', function askForPermission() {
  navigator.geolocation.getCurrentPosition(positionSuccess, error);
  for (var i = 0, length = radioButtons.length; i < length; i++) {
    if (radioButtons[i].checked) {
      radius = radioButtons[i].value;
      localStorage.setItem('distance', radius);
      break;
    };
  };
  pageContent.append(searchResults);
});

// Position hittad
function positionSuccess(position) {
  userPosition.lat = position.coords.latitude;
  userPosition.lng = position.coords.longitude;
  currentPositionFailure.style.display = 'none';
  initMap();
};

// Hittade ingen position
function error() {
  userSelection.appendChild(currentPositionFailure);
  currentPositionFailure.innerHTML =
    'Your location could not be found.' +
    '<br>' +
    'Activate your location services.';
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
    radius: localStorage.getItem('distance'),
    type: ['restaurant'],
    openNow: true,
  };

  // Search for restaurants
  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, handleResults);

  // Add restaurants to map
  function handleResults(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);

      for (let i = 0; i < results.length; i++) {
        localStorage.setItem('foundRestaurants', JSON.stringify(results));
        var restaurant = results[i];
        const position = {
          lat: restaurant.geometry.location.lat(),
          lng: restaurant.geometry.location.lng(),
        };

        const marker = new google.maps.Marker({
          position: position,
          map: map,
          title: restaurant.name,
        });

        // Info window
        const infoWindow = new google.maps.InfoWindow();
        marker.addListener('click', () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });

        searchResults.innerHTML = '';

        displayResults();
      };
    } else if (status !== google.maps.places.PlacesServiceStatus.OK) {
      searchResults.innerHTML = 
        'No open restaurants found within the specified distance. Please try a broader search!';
    };
  };
};

function displayResults() {
  if (localStorage.getItem('distance') == '250') {
    let distance = '250 m';
    localStorage.setItem('distanceValue', distance);
  } else if (localStorage.getItem('distance') == '500') {
    let distance = '500 m';
    localStorage.setItem('distanceValue', distance);
  } else if (localStorage.getItem('distance') == '750') {
    let distance = '750 m';
    localStorage.setItem('distanceValue', distance);
  } else if (localStorage.getItem('distance') == '1000') {
    let distance = '1 km';
    localStorage.setItem('distanceValue', distance);
  } else if (localStorage.getItem('distance') == '5000') {
    let distance = '5 km';
    localStorage.setItem('distanceValue', distance);
  } else if (localStorage.getItem('distance') == '10000') {
    let distance = '10 km';
    localStorage.setItem('distanceValue', distance);
  }

  searchResults.innerHTML =
    '<h2>Open restaurants within ' + localStorage.getItem('distanceValue') + '</h2>';
    
  let foundRestaurants = JSON.parse(localStorage.getItem('foundRestaurants'));

  foundRestaurants.map(restaurant => {
    searchResults.innerHTML +=
      '<p><strong>' + restaurant.name + '</strong></p>' +
      '<p>' + restaurant.vicinity + '</p>' +
      '<p>Rating: ' + restaurant.rating + ' / 5</p><br>';
  });
};

window.onload = startMap;
window.initMap = initMap;
