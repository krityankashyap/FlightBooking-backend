const express = require('express');


// const  InfoController  = require('../../controller/index')
const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')
const airportRoutes = require('./airport-routes')
const router = express.Router();

router.use('/airplanes' , airplaneRoutes);
// router.get('/info' , InfoController.Info );

router.use('/city' , cityRoutes);

router.use('/airports' , airportRoutes)

module.exports=
  router;