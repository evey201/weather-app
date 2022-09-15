const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2]

geocode(address, (error, data) => {
  if (!address) {
    return console.log('Please enter an address')
  }
  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if(error) {
      return console.log(error)
    }
    console.log("location: ", data.location);
    console.log("forecastData: ", forecastData);
  });
});
