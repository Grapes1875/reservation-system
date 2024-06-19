const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];

// Modify the Knex initialization to include SSL settings
const knex = require('knex')({
  client: 'pg', // Assuming you're using PostgreSQL
  connection: {
    connectionString: config.connection,
    ssl: {
      rejectUnauthorized: false, // This setting depends on your PostgreSQL setup
    },
  },
});

module.exports = knex;
