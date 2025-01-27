const express = require('express');
const { CityController } = require('../../controller');
const router = express.Router();

router.post('/'  , CityController.createCity);

module.exports = router;