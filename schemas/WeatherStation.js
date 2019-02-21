const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const WeatherStationSchema = new Schema({
  value: {
    type: Object,
    required: true
  },
  date: {
    type: Date
  },
  meta: {
    timestamp: {
      type: Date,
      default: Date.now
    }
  }
});

mongoose.model('WeatherStation', WeatherStationSchema);

module.exports = mongoose.model('WeatherStation');