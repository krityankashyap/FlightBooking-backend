const express = require('express');
const { AirportController } = require('../../controller');
const { AirportMiddlewares } = require('../../middlewares')
const router = express.Router();

router.post('/' , AirportMiddlewares.validatePostReq , AirportController.createAirport);

router.get('/' , AirportController.getAirport);

router.get('/:id' , AirportController.getAirportById);

router.delete('/:id' , AirportController.destroyAirport);


module.exports = router;