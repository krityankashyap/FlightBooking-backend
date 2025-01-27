const { crudRepository } = require('./crud-repository');
const { City } = require('../models');

class CityRepository extends crudRepository {
   
  constructor(){
    super(City);
  }

};

module.exports = CityRepository;
