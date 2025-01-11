const { crudRepository } = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends crudRepository {
   
  constructor(){
    super(Airplane);
  }

};

module.exports = AirplaneRepository;
