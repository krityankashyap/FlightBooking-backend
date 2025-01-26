const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../service');
const { SuccessResponse , ErrorResponse} = require('../utils/common');

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
    SuccessResponse.data = airplane
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function getAirplanes(req , res){
   try {
    const airplanes = await AirplaneService.getAirplane();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
   } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function getAirplaneById(req , res){
  try {
    const airplanes = await AirplaneService.getAirplaneById(req.params.id);
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

module.exports = {
   createAirplane,
   getAirplanes,
   getAirplaneById
}