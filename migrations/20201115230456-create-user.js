"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      discordId: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      count: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },//fish stuff
      fish: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      motorized_wheelchair: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      manual_wheelchair: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      heart: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      blowfish: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      tropical_fish: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      boot: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      wrench: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      yen: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      line: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      bait: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      boat: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },//end of fish stuff
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
