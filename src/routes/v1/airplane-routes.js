const express = require('express');
const { AirplaneController } = require('../../controller');
const router = express.Router();

router.post('/' , AirplaneController.createAirplane);

module.exports = router;