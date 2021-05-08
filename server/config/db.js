'use strict'

const Sequelize = require('sequelize');
const env = require('./env');

const setupSequelize = (databaseName) => {
  const setup = new Sequelize(databaseName, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
      underscored: true
    }
  });
  return setup;
}

let sequelize = setupSequelize('postgres');
sequelize.query(`CREATE DATABASE \"${env.DATABASE_NAME}\";`)
  .catch(() => console.log(`Database ${env.DATABASE_NAME} already exists`))
  .finally(() => sequelize = setupSequelize(env.DATABASE_NAME))

 const sequelize_table = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
      underscored: true
    }
  });

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize_table;

//Models/tables
db.downloads = require('../models/downloads.js')(sequelize_table, Sequelize);

module.exports = db;
