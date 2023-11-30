//   MAPS JS
mapboxgl.accessToken = ACCESS_TOKEN;

// DEFAULT MAP
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v9',
    zoom: 12,
    center: [-96.948891, 32.814018]
});


//DEFAULT WEATHER COORDS
const defaultCoords = {
    lat: 32.814018,
    lon: -96.948891
}

//GRABBING THE WEATHER INFORMATION
function updateWeatherCards (coords) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${coords.lat}&lon=${coords.lon}` +
        `&appid=${OPEN_WEATHER_KEY}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(forecast => {
            console.log(forecast)

            //BUILD CARD
            let cardContainer = document.querySelector('.row');
            //RESET THE CARDS WHEN UPDATED
            cardContainer.innerHTML = "";

            //LOOP THROUGH
            for (let i = 0; i < 5; i++) {

                //  CARD INFORMATION
                let weather = forecast.list[i].weather[0].main;
                let date = `${new Date(forecast.list[i * 8].dt * 1000).toDateString()}`;
                let temperature = `Average Temp: ${forecast.list[i * 8].main.temp}°F`;
                let highLow = `Looks like there will be ${weather} with a maximum temperature of ${forecast.list[i * 8].main.temp_max}°F and a minimum temperature of ${forecast.list[i * 8].main.temp_min}°F.`
                let imageUrl = weatherImgUrl(weather);


                let card = createWeatherCard(date, temperature, weather, highLow, imageUrl);
                cardContainer.appendChild(card);

                //    CREATE THE ACTUAL CONTENT OF THE CARDS
                function createWeatherCard() {
                    let card = document.createElement('div');
                    card.className = 'weatherCards card col m-2';
                    card.innerHTML = `
            <img src="${imageUrl}" class="weatherImgs card-img-top" alt="weather">
            <div class="card-body">
                <h5 class="card-title">${date}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${temperature}</h6>
                <p class="card-text">${highLow}</p>
            </div>
        `;
                    return card;
                }
            }
        });
}
updateWeatherCards(defaultCoords);


//   WEATHER IMAGES
    function weatherImgUrl(weather) {
        if (weather === 'Rain') {
            return "img/rain.png"
        } else if (weather === 'Clouds') {
            return "img/clouds.png"
        } else {
            return "img/clear.png"
        }
    }

// Add an event listener to the map for a click event

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-96.948891, 32.814018])
    .addTo(map);
marker.on('dragend', (e) => {
    // Get the coordinates of the clicked point
    const markerCoords = {
        lat: e.target._lngLat.lat,
        lon: e.target._lngLat.lng
    };
    updateWeatherCards(markerCoords);
});
