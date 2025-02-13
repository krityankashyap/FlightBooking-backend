const { crudRepository } = require('./crud-repository');
const { Airport } = require('../models');

class AirportRepository extends crudRepository {
   
  constructor(){
    super(Airport);
  }

};

module.exports = AirportRepository
