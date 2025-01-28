const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../service');
const { SuccessResponse , ErrorResponse} = require('../utils/common');

/**
 * POST : /city
 * req-body = {
 *            name
 *             }
 */

async function createCity(req , res) {
  try {
    
    const city = await CityService.createCity({
     name: req.body.name
    });
    SuccessResponse.data = city
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
};

async function getcities(req , res){
  try {
   const city = await CityService.getCities();
   SuccessResponse.data = city;
   return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
   ErrorResponse.error = error;
   return res.status(error.StatusCodes).json(ErrorResponse);
 }
};

async function getCity(req , res){
  try {
    const city = await CityService.getCityById(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
};

async function destroyCity(req , res){
  try {
    const response = await CityService.destroyCity(req.params.id);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  getcities,
  getCity,
  destroyCity
}