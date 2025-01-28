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

async function getCities() {
  try {
    let cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new Apperror('cannot fetch the city' , StatusCodes.INTERNAL_SERVER_ERROR);
  }

};
async function getCityById(id){
  try {
    const city = await cityRepository.get(id);
    return city
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new Apperror("No cities are available for this id" , error.statusCodes );
    }
  throw new Apperror('Cannot fetch data of all cities' , StatusCodes.INTERNAL_SERVER_ERROR );
  }
};

async function destroyCity(id){
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new Apperror("The airplane u req for not present" , error.statusCodes );
    }
  throw new Apperror('Cannot fetch data of all airplanes' , StatusCodes.INTERNAL_SERVER_ERROR );
  }
};



module.exports = {
  createCity,
  getCities,
  getCityById,
  destroyCity
}