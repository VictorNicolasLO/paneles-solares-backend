const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SolarPanelSchema = new Schema ({
    value: { type:Number, required: true},
    date: { type: Date, default: Date.now },
    meta: {
        timestamp: { type:Date, default: Date.now }
    }
});

mongoose.model ( 'SolarPanel', SolarPanelSchema);

module.exports = mongoose.model('SolarPanel');