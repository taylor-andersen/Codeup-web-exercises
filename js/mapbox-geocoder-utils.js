"use strict";

export function geocode(cityName, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(cityName)}.json?access_token=${token}`)
        .then( res => res.json() )
        .then(data => {
            // Extract the coordinates from the first feature
            const coordinates = data.features[0].center;
            return {
                lat: coordinates[1],
                lng: coordinates[0]
            };
        });
}


export function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then( res => res.json() )
        .then( data => data.features[0].place_name );
}