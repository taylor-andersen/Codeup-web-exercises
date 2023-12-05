// --------------------------------------------------------------------------------------------------------------MAPS JS
mapboxgl.accessToken = ACCESS_TOKEN;
import { geocode, reverseGeocode } from "./mapbox-geocoder-utils.js";

// ----------------------------------------------------------------------------------------------------------DEFAULT MAP
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 10,
    center: [-96.948891, 32.814018]
});


// -----------------------------------------------------------------------------------------------DEFAULT WEATHER COORDS
const defaultCoords = {
    lat: 32.814018,
    lng: -96.948891
}

// ---------------------------------------------------------------------------------UPDATE WEATHER BASED ON GIVEN COORDS
function updateWeatherCards(coords) {
    // Reverse geocode to get the city name
    reverseGeocode(coords, ACCESS_TOKEN)
        .then(cityName => {
            document.getElementById('cityName').innerText = `Current Viewing Address: ${cityName}`;
            // Display the city name
            console.log(coords)
            console.log(cityName)
            // Fetch and update weather cards
            fetchWeatherData(coords);
        })
        .catch(error => {
            console.error('Error getting city name:', error);
        });
}

// ---------------------------------------------------------------------------------    GRABBING THE WEATHER INFORMATION
function fetchWeatherData(coords) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${coords.lat}&lon=${coords.lng}` +
        `&appid=${OPEN_WEATHER_KEY}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(forecast => {
            console.log(forecast)
            //BUILD CARD
            let cardContainer = document.querySelector('#cardRow');
            //RESET THE CARDS WHEN UPDATED
            cardContainer.innerHTML = "";

            //   ----------------------------------------------------------------------------------------------     LOOP
            for (let i = 0; i < 5; i++) {

                //  CARD INFORMATION INPUT
                let weather = forecast.list[i].weather[0].main;
                let date = `${new Date(forecast.list[i * 8].dt * 1000).toDateString()}`;
                let temperature = `Average Temp: ${forecast.list[i * 8].main.temp}°F`;
                let sky = `Looks like there will be ${weather} today.`
                let high = `Maximum temperature of ${forecast.list[i * 8].main.temp_max}°F`
                let low = `Minimum temperature of ${forecast.list[i * 8].main.temp_min}°F`
                let feelsLike = `Feels Like: ${forecast.list[i * 8].main.feels_like}°F`
                let wind = `Wind Speed: ${forecast.list[i * 8].wind.speed}mph`
                let humidity = `Humidity: ${forecast.list[i * 8].main.humidity}`
                let imageUrl = weatherImgUrl(weather);


                let card = createWeatherCard
                (date, temperature, weather, sky, high, low, feelsLike, wind, humidity, imageUrl);
                cardContainer.appendChild(card);

                //    BUILD THE ACTUAL CONTENT OF THE CARDS WITH PROVIDED INFORMATION
                function createWeatherCard() {
                    let card = document.createElement('div');
                    card.className = 'weatherCards card col m-2';
                    card.innerHTML = `
            <img src="${imageUrl}" class="weatherImgs card-img-top" alt="weather">
            <div class="card-body">
                <h5 class="card-title">${date}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${temperature}</h6>
                <p class="card-text">${sky}</p>
                <p class="card-text">${high}</p>
                <p class="card-text">${low}</p>
                <p class="card-text">${feelsLike}</p>
                <p class="card-text">${wind}</p>
                <p class="card-text">${humidity}</p>
            </div>
        `;
                    return card;
                }
            }
        })
}

fetchWeatherData(defaultCoords);


//  -------------------------------------------------------------------------------------------------     WEATHER IMAGES
function weatherImgUrl(weather) {
    if (weather === 'Rain') {
        return "img/rain.png"
    } else if (weather === 'Clouds') {
        return "img/clouds.png"
    } else {
        return "img/clear.png"
    }
}

// --------------------------------------------------------   Add an event listener to the map for a click or drag event
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat(defaultCoords)
    .addTo(map);
marker.on('dragend', (e) => {
    // Get the coordinates of the clicked point
    const markerCoords = {
        lat: e.target._lngLat.lat,
        lng: e.target._lngLat.lng
    };
    updateWeatherCards(markerCoords);
    map.setCenter(markerCoords);
});
map.on('click', (e) => {
    const clickedCoords = {
        lat: e.lngLat.lat,
        lng: e.lngLat.lng
    };
    moveMarker(clickedCoords);
    map.setCenter(clickedCoords);
});

function moveMarker(coords) {
    marker.setLngLat(coords);
    updateWeatherCards(coords);
}

// -------------------------------------------------------------------------------------------------------    SEARCH BAR
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    // Get the city name from the input field
    const cityName = document.getElementById('searchInput').value;

    // Perform geocoding to get the coordinates for the city
    geocode(cityName, ACCESS_TOKEN)
        .then(coords => {
            // Update the map and marker
            map.setCenter(coords);
            marker.setLngLat(coords);

            // Update the city name display
            document.getElementById('cityName').innerText = `Current Viewing Address: ${cityName}`;

            // Fetch and update weather cards
            updateWeatherCards(coords);
        })
        .catch(error => {
            console.error('Error geocoding:', error);
        });
});
