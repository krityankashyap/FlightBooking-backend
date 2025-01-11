const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../service');

/**
 * POST : /airplanes
 * req-body = {
 *             modelNumber : 'Airbus234' ,
 *             capacity : 200
 *             }
 */

async function createAirplane(req , res) {
  try {
    
    const airplane = AirplaneService.createAirplane({
      modelNumber : req.body.modelNumber,
      capacity : req.body.capacity
    });
    return res.status(StatusCodes.CREATED).json({
      success : true,
      msg : "successfully created airplane",
      data : airplane,
      error : {}
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success : false,
      data : {},
      error : error
    });
  }
}

module.exports = {
   createAirplane,
}