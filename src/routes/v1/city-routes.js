const express = require('express');
const { CityController } = require('../../controller');
const  {CityMiddlewares } = require('../../middlewares')
const router = express.Router();

router.post('/'  ,CityMiddlewares.validatePostReq , CityController.createCity);

module.exports = router;