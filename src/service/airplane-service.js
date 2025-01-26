const {AirplaneRepository} = require('../repository');
const Apperror = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
      const airplane = await airplaneRepository.create(data);
      return airplane;
    } catch (error) {
  
      if(error.name == 'SequelizeValidationError'){
        let explanation = [];
        error.errors.forEach((err)=>{
          explanation.push(err.message)
        })
        console.log(explanation);
        throw new Apperror(explanation , StatusCodes.BAD_REQUEST );
      }
      throw new Apperror('Cannot create a new Airplane Object' , StatusCodes.INTERNAL_SERVER_ERROR );
    }

};

async function getAirplane(){
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    
    throw new Apperror('Cannot fetch data of all airplanes' , StatusCodes.INTERNAL_SERVER_ERROR );
  }
};

async function getAirplaneById(id){
  try {
    const airplanes = await airplaneRepository.get(id);
    return airplanes;
  } catch (error) {
    if(error.StatusCodes == StatusCodes.NOT_FOUND){
      throw new Apperror("No flights are available for this id" , error.StatusCodes );
    }
  throw new Apperror('Cannot fetch data of all airplanes' , StatusCodes.INTERNAL_SERVER_ERROR );
  }
}

module.exports = {
  createAirplane,
  getAirplane,
  getAirplaneById
}