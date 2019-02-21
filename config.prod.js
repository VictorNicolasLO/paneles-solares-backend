const SECRET = process.env.SECRET;
const WEATHER_STATION_TOKEN = process.env.WEATHER_STATION_TOKEN;
console.log(SECRET);
module.exports = {
  secret: SECRET,
  weatherStationToken: WEATHER_STATION_TOKEN,
  database: 'mongodb://mongodb:27017'
};
