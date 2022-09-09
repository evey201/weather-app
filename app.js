const request = require("postman-request");
const geocode = require("./utils/geocode")

const url = `http://api.weatherstack.com/current?access_key=d0b17ebc80c5f99607527edcb7f549bc&query=Nicosia`;

log = console.log;
request({ url: url, json: true }, (error, response) => {
  if (error) {
    log("Unable to connect to weather service!!");
  } else if (response.body.error) {
    log("Unable to find location");
  } else {
    let temp = response?.body.current.temperature;
    let feelsLike = response?.body.current.feelslike;
    let description = response?.body.current.weather_descriptions[0];
    log(
      `The weather is ${description} at the moment. It is currently ${temp} degrees out. it also feels like ${feelsLike} degrees out`
    );
  }
  // console.log(response.body.current)
});


geocode("Nigeria", (error, data) => {
  console.log("data:: ", data);
  console.log("error:: ", error);
  log(`The latitude is ${data.latitude} and the longitude is ${data.longitude}. The name of the place is ${data.location}`)
});
