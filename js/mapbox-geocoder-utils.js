"use strict";

function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${ACCESS_TOKEN}`)
        .then( res => res.json() )
        .then( data => data.features[0].center);
}

function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${ACCESS_TOKEN}`)
        .then( res => res.json() )
        .then( data => data.features[0].place_name );
}