const SolarHeater = require('../../schemas/SolarHeater');

async function update(req, res) {
  const field = req.query.field;
  try {
    const createdSolarHeaterValue = await SolarHeater.create({
      value: field
    });
    res.status(201).json(createdSolarHeaterValue);
  } catch (e) {
    res.status(500).json({
      message: e.message
    });
  }
}

async function get(req, res) {
  let startDate = req.query.startDate;
  let endDate = req.query.endDate;
  try {
    let SolarHeaterValues;
    if (startDate && endDate) {
      startDate = convertUTCDateToLocalDate(new Date(startDate));
      endDate = convertUTCDateToLocalDate(new Date(startDate));
      SolarHeaterValues = await SolarHeater.find({
        date: {
          $gt: startDate,
          $lt: endDate
        }
      }).exec();
    } else {
      SolarHeaterValues = await SolarHeater.find();
    }

    res.status(201).json(SolarHeaterValues);
  } catch (e) {
    res.status(500).json({
      message: e.message
    });
  }
}

function convertUTCDateToLocalDate(date) {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();

  newDate.setHours(hours - offset);

  return newDate;
}

module.exports = {
  update,
  get
};
