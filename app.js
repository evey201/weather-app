const request = require("postman-request");

const url = `http://api.weatherstack.com/current?access_key=d0b17ebc80c5f99607527edcb7f549bc&query=Nicosia`;

log = console.log
request({url: url, json: true}, (error, response) => {
    console.log(response.body.current)
    let temp = response?.body.current.temperature
    let feelsLike = response?.body.current.feelslike
    let description = response?.body.current.weather_descriptions[0]
    log(`The weather is ${description} at the moment. It is currently ${temp} degrees out. it also feels like ${feelsLike} degrees out`)
    if (error) {
        console.log(error)
    }
})

//Geocoding

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/cyprus.json?types=country&access_token=pk.eyJ1IjoiZXZleTIwMSIsImEiOiJjbDZsd2diZ2cwZnZoM2pydTludWNmdnRrIn0.HTy9qjnHHUDnaJ7RYnKF9Q`
request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log(error)
    }
    if (!error) {
        console.log(response.body.features)
        let lat = response?.body.features[0]?.center[1]
        let long = response?.body.features[0]?.center[0]
        log(`The latitude is ${lat} and the longitude is ${long}.`)
    }
})