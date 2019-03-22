const path = require('path');
require('dotenv').config(path.join(__dirname, "./.env"));
const knex = require('knex')


const options = {
  production: {
    client: 'pg',
    version: '10.6',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    pool: { min: 1, max: 7 }
  }
}

module.exports = options
