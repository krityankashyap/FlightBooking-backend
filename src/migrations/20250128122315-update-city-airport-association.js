'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports' , {
      type : "FOREIGN KEY",
      name : "city_fk_constraint",
      fields : ["cityId"],
      references : {
        table : "Cities",
        field : "id"
      },
      onUpdate : 'CASCADE',
      onDelete : 'CASCADE'
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports' , 'city_fk_constraint');
  }
};

/**
 *  for association : npx sequelize migration:generate --name update-city-airport-association
 */
