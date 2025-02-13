const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../service');
const { SuccessResponse , ErrorResponse} = require('../utils/common');



async function createAirport(req , res) {
  try {
    
    const airport = await AirportService.createAirport({
     name : req.body.name,
     code : req.body.code,
     address : req.body.address,
     cityId : req.body.cityId
    });
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function getAirport(req , res){
   try {
    const airport = await AirportService.getAirport();
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
   } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function getAirportById(req , res){
  try {
    const airport = await AirportService.getAirportById(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function destroyAirport(req , res){
  try {
    const airport = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}


module.exports = {
   createAirport,
   getAirport,
   getAirportById,
   destroyAirport
}