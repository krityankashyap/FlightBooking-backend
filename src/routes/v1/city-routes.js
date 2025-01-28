const express = require('express');
const { CityController } = require('../../controller');
const  {CityMiddlewares } = require('../../middlewares')
const router = express.Router();

router.post('/'  ,CityMiddlewares.validatePostReq , CityController.createCity);

router.get('/' , CityController.getcities);

router.get('/:id' , CityController.getCity);

router.delete('/:id' , CityController.destroyCity);

module.exports = router;