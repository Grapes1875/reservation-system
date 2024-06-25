const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];

// Modify the Knex initialization to include SSL settings
const knex = require('knex')({
  client: 'pg', 
  connection: {
    connectionString: config.connection,
    ssl: {
      rejectUnauthorized: false, 
    },
  },
});

module.exports = knex;