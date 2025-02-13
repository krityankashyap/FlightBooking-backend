const  { AirportRepository } = require('../repository');
const Apperror = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes')

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
      const airport = await airportRepository.create(data);
      return airport;
    } catch (error) {
  
      if(error.name == 'SequelizeValidationError'){
        let explanation = [];
        error.errors.forEach((err)=>{
          explanation.push(err.message)
        })
        console.log(explanation);
        throw new Apperror(explanation , StatusCodes.BAD_REQUEST );
      }
      throw new Apperror('Cannot create a new Airport Object' , StatusCodes.INTERNAL_SERVER_ERROR );
    }

};

async function getAirport(){
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    
    throw new Apperror('Cannot fetch data of all airports' , StatusCodes.INTERNAL_SERVER_ERROR );
  }
};

async function getAirportById(id){
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new Apperror("No flights are available for this id" , error.statusCodes );
    }
  throw new Apperror('Cannot fetch data of all airplanes' , StatusCodes.INTERNAL_SERVER_ERROR );
  }
}

async function destroyAirport(id){
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new Apperror("The airport u req for not present" , error.statusCodes );
    }
  throw new Apperror('Cannot fetch data of all airports' , StatusCodes.INTERNAL_SERVER_ERROR );
  }
}

module.exports = {
  createAirport,
  getAirport,
  getAirportById,
  destroyAirport
}