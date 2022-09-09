const request = require("postman-request");

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?types=country&access_token=pk.eyJ1IjoiZXZleTIwMSIsImEiOiJjbDZsd2diZ2cwZnZoM2pydTludWNmdnRrIn0.HTy9qjnHHUDnaJ7RYnKF9Q`;
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to location service!!", undefined);
      }
      if (response?.body?.features?.length === 0) {
        callback("Unable to find the location, Try another search/", undefined);
      } else {
        // console.log(response?.body?.features);
        callback(undefined, {
          latitude: response?.body.features[0]?.center[1],
          longitude: response?.body.features[0]?.center[0],
          location: response?.body?.features[0]?.place_name,
        });
        //   log(`The latitude is ${lat} and the longitude is ${long}.`);
      }
    });
  };


  module.exports = geocode;