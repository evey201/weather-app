const request = require("postman-request");

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d0b17ebc80c5f99607527edcb7f549bc&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;
  log = console.log;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      let temp = response?.body.current.temperature;
      let feelsLike = response?.body.current.feelslike;
      let description = response?.body.current.weather_descriptions[0];
      callback(
        undefined,
        `The weather is ${description} at the moment. It is currently ${temp} degrees out. It also feels like ${feelsLike} degrees out`
      );
    }
    // console.log(response.body.current)
  });
};

module.exports = forecast;
