const express = require('express');


const  InfoController  = require('../../controller/index')
const airplaneRoutes = require('./airplane-routes')
const router = express.Router();

router.use('/airplanes' , airplaneRoutes);
router.get('/info' , InfoController.Info );

module.exports=router;