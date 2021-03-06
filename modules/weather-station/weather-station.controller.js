const WeatherStation = require('../../schemas/WeatherStation');

async function getLastDate(req, res) {
  try {
    const newestItem = await WeatherStation.find()
      .sort({
        date: 'desc',
      })
      .limit(1);
    res.json({
      success: true,
      date: newestItem[0] ? newestItem[0].date : undefined,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.toString(),
    });
  }
}

async function create(req, res) {
  const { body: data } = req;

  try {
    debugger;
    const newItem = await WeatherStation.create({
      date: new Date(data.date),
      value: data,
    });
    res.json({
      success: true,
      data: newItem,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.toString(),
    });
  }
}

async function get(req, res) {
  try {
    const items = await WeatherStation.find({});
    res.json({
      success: true,
      data: items,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.toString(),
    });
  }
}

async function getByDateRange(req, res) {
  try {
    const {
      query: { dateFrom, dateTo },
    } = req;

    const dateFilter = {};
    if (dateFrom) {
      dateFilter.$gte = new Date(dateFrom);
    }

    if (dateTo) {
      dateFilter.$lte = new Date(dateTo);
    }

    const items = await WeatherStation.find({ date: dateFilter });

    res.json({
      success: true,
      data: items,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.toString(),
    });
  }
}

module.exports = {
  getLastDate,
  create,
  get,
  getByDateRange,
};
