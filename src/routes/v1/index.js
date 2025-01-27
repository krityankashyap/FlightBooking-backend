const express = require('express');


// const  InfoController  = require('../../controller/index')
const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')
const router = express.Router();

router.use('/airplanes' , airplaneRoutes);
// router.get('/info' , InfoController.Info );

router.use('/city' , cityRoutes);

module.exports=
  router;