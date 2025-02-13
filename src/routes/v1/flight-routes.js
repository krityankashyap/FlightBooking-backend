const express = require('express');
const { FlightController } = require('../../controller');
const { FlightMiddlewares } = require('../../middlewares')
const router = express.Router();

router.post('/' , FlightMiddlewares.validatePostReq , FlightController.createFlight);



module.exports = router;