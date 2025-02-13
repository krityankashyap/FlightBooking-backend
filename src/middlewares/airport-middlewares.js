const {statusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const Apperror = require('../utils/errors/app-error');

function validatePostReq(req , res , next){
     if(!req.body.name) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['name is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }

     if(!req.body.code) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['Airport code is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }

     if(!req.body.cityId) {
      ErrorResponse.message = "Something went wrong while creating";
      ErrorResponse.error = new Apperror(['Airport cityId is not provided as given'], statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(ErrorResponse);
     }
     next();
}

module.exports = { validatePostReq }