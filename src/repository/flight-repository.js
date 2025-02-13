const { crudRepository } = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends crudRepository {
   
  constructor(){
    super(Flight);
  }

};

module.exports = FlightRepository
