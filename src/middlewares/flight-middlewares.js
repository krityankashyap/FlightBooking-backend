const {statusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const Apperror = require('../utils/errors/app-error');

function validatePostReq(req , res , next){
     if(!req.body.flightNumber) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['flightNumber is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }

     if(!req.body.airplaneId) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['airplaneId code is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }

     if(!req.body.departureAirportId) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['departureAirportId is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }

     if(!req.body.arrivalAirportId) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['arrivalAirportId is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }

     if(!req.body.arrivalTime) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['arrivalTime is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }

     if(!req.body.departureTime) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['departureTime is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }

     if(!req.body.price) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['price is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }
     if(!req.body.totalSeats) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['totalSeats is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }
     next();
}

module.exports = { validatePostReq }