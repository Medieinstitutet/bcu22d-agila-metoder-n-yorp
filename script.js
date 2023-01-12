const searchLocation = document.getElementById('searchLocation');
const currentPositionFailure = document.createElement('p');
const userSelection = document.getElementById('userSelection');
const mapContainer = document.getElementById('mapContainer');
const radioButtons = document.getElementsByName('Distance');
const pageContent = document.getElementById('pageContent');
const wheelContainer = document.querySelector('.container')
const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const infoBox = document.getElementById('infoBox');
const distanceOptions = document.getElementById('distanceOptions');
const chosenRestaurant = document.getElementById('chosenRestaurant');
const body = document.body;
const errorMessage = document.getElementById('errorMessage')
let value = Math.ceil(Math.random() * 3500);

let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'? cb(): 
  document.addEventListener('DOMContentLoaded', cb);
}

domReady(() => {
  body.style.visibility = 'visible';
});

function startMap() {
  const position = new google.maps.LatLng(62.27412, 15.2066);
  const map = new google.maps.Map(mapContainer, {
    center: position,
    zoom: 4,
  });
};

let userPosition = {
  lat: 0,
  lng: 0,
};

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

      errorMessage.innerHTML = '';

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

        displayResults();

        infoBox.remove();
        distanceOptions.remove();
        searchLocation.remove();
        userSelection.append(wheelContainer);
      };
    } else if (status !== google.maps.places.PlacesServiceStatus.OK) {
        if (localStorage.getItem('distance') !== null) {
          errorMessage.innerHTML = '<br>No open restaurants found within the specified distance. Please try a broader search!';
        };
        userSelection.append(infoBox);
        userSelection.append(distanceOptions);
        userSelection.append(searchLocation);
        userSelection.append(errorMessage)
        userSelection.classList.add('backgroundColor')
        wheelContainer.remove();
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
  };
};

wheelContainer.remove();

spinBtn.onclick = function() {
  wheel.style.transform = 'rotate(' + value + 'deg)';
  value += Math.ceil(Math.random() * 3500);

  randomRestaurant();

  var timeout = 0;
  timeout = setTimeout(function() {
    chosenRestaurant.innerHTML = '<p><br>Du ska äta på följande restaurang:</p><h2>' + randomRestaurant() + '<br><br></h2>';

    userSelection.append(chosenRestaurant);
  }, 5100)
}

function randomRestaurant() {
  chosenRestaurant.remove();
  let foundRestaurants = JSON.parse(localStorage.getItem('foundRestaurants'));
  for (let i = 0; i < foundRestaurants.length; i++) {
    foundRestaurants[i] = foundRestaurants[i].name;
  };
  const random = Math.floor(Math.random() * foundRestaurants.length);
  return foundRestaurants[random];
};

window.onload = startMap;
window.initMap = initMap;

if (window.location.reload) {
  localStorage.removeItem('distance');
}