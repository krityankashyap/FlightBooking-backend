const {CityRepository} = require('../repository');
const Apperror = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes')

const cityRepository = new CityRepository();

async function createCity(data){
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    
    if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
      let explanation = [];
      error.errors.forEach((err)=>{
        explanation.push(err.message)
      })
      console.log(explanation);
      throw new Apperror(explanation , StatusCodes.BAD_REQUEST );
    }
    throw new Apperror('Cannot create a new city Object' , StatusCodes.INTERNAL_SERVER_ERROR );
  }
  
};


module.exports = {
  createCity,
}