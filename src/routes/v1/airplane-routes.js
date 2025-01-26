const express = require('express');
const { AirplaneController } = require('../../controller');
const { AirplaneMiddlewares } = require('../../middlewares')
const router = express.Router();

router.post('/' , AirplaneMiddlewares.validatePostReq  , AirplaneController.createAirplane);

router.get('/' , AirplaneController.getAirplanes);

router.get('/:id' , AirplaneController.getAirplaneById);

router.delete('/:id' , AirplaneController.destroyAirplane);


module.exports = router;