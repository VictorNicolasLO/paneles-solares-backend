const WeatherStation = require('../../schemas/WeatherStation');

async function getLastDate(req, res) {
  try {
    const newestItem = await WeatherStation.find()
      .sort({
        date: 'desc'
      })
      .limit(1);
    res.json({
      success: true,
      date: newestItem[0] ? newestItem[0].date : undefined
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.toString()
    });
  }
}

async function create(req, res) {
  const { body: data } = req;

  try {
    debugger;
    const newItem = await WeatherStation.create({
      date: new Date(data.date),
      value: data
    });
    res.json({
      success: true,
      data: newItem
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.toString()
    });
  }
}

module.exports = {
  getLastDate,
  create
};
