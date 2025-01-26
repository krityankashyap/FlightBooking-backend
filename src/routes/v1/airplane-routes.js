const express = require('express');
const { AirplaneController } = require('../../controller');
const { AirplaneMiddlewares } = require('../../middlewares')
const router = express.Router();

router.post('/' , AirplaneMiddlewares.validatePostReq  , AirplaneController.createAirplane);

router.get('/' , AirplaneController.getAirplanes);


module.exports = router;