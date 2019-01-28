const SolarPanel = require('../../schemas/SolarPanel');

async function update(req, res){
    const field = req.query.field;

    try{
        const createdSolarPanelValue = await SolarPanel.create({
            value: field
        });

        res.status(201).json(createdSolarPanelValue);
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

async function get(req, res){
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    try{
        let SolarPanelValues;
        if(startDate && endDate){
            startDate = convertUTCDateToLocalDate(new Date(startDate));
            endDate = convertUTCDateToLocalDate(new Date(startDate));
            SolarPanelValues = await SolarPanel.find({
                date: {
                    $gt: startDate,
                    $lt: endDate
                }
            }).exec();
        } else {
            SolarPanelValues = await SolarPanel.find();
        }

        res.status(201).json(SolarPanelValues);
    } catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

function convertUTCDateToLocalDate(date){
    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    var offset = date.getTimezoneOffset()/60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}

module.exports = {
    update,
    get
};