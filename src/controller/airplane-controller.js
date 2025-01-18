const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../service');
const { successResponse , errorResponse} = require('../utils/common');

/**
 * POST : /airplanes
 * req-body = {
 *             modelNumber : 'Airbus234' ,
 *             capacity : 200
 *             }
 */

async function createAirplane(req , res) {
  try {
    
    const airplane = await AirplaneService.createAirplane({
      modelNumber : req.body.modelNumber,
      capacity : req.body.capacity
    });
    successResponse.data = airplane
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.StatusCodes).json(errorResponse);
  }
}

module.exports = {
   createAirplane,
}