'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('candidatos', 'nota', {
          type: Sequelize.FLOAT,
          allowNull: true
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('candidatos', 'nota');
  }
};