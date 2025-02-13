const express = require('express');
const{ serverConfig , Logger}= require('./config/index');
const apiRoutes = require('./routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/api' , apiRoutes);

app.listen(serverConfig.PORT , async ()=>{
  console.log(`successfully started the server on PORT : ${serverConfig.PORT}`);
 
  //  Badcode alert
   const {City , Airport} = require('./models');

   /* const melborne = await City.findByPk(17);
   console.log(melborne);

   const TMelborne = await melborne.createAirport({name: "Melbourne Airport" , code: "AVV"});
   console.log(TMelborne);

   const airportInMelborne = await melborne.getAirports();
   console.log(airportInMelborne);
   */

   /* 
   const city = await City.findByPk(14);
   await city.createAirport({name:"Sydney Kingsford Smith Airport (SYD)" , code:"SYD"});
   */

   await City.destroy({
    where:{
      id:14,
    }
   })
}) 