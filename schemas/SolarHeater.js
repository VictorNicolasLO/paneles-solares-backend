const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const SolarHeaterSchema = new Schema({
  value: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  meta: {
    timestamp: { type: Date, default: Date.now }
  }
});

mongoose.model('SolarHeater', SolarHeaterSchema);

module.exports = mongoose.model('SolarHeater');
