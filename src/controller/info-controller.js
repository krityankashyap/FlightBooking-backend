const {statusCodes} = require('http-status-codes')
const info = (req , res)=>{
  return res.status(statusCodes.OK).json({
    success : true,
    msg : "server is live",
    error : {},
    data : info
  });
};

module.exports = info
