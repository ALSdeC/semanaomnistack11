const knex = require('knex');
const configuration = require('../../knexfile.js');

//Get the connection
const connection = knex(configuration.development);

module.exports = connection;