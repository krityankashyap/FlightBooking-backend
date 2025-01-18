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

module.exports = {
  createAirplane,
}