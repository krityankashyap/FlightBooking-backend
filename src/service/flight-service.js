const  { FlightRepository } = require('../repository');
const Apperror = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes')

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
      const flight = await flightRepository.create(data);
      return flight;
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


module.exports = {
  createFlight,
}