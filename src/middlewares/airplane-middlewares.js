const {statusCodes} = require('http-status-codes');
const { errorResponse } = require('../utils/common');
const Apperror = require('../utils/errors/app-error');
function validatePostReq(req , res , next){
     if(!req.body.modelNumber) {
      errorResponse.message = "Something went wrong while creating";
      errorResponse.error = new Apperror({explanation : 'modelNumber is not provided as given'}, statusCodes.BAD_REQUEST);
      
      return res.statusCodes(statusCodes.BAD_REQUEST).json(errorResponse);
     }
     next();
}

module.exports = { validatePostReq }
