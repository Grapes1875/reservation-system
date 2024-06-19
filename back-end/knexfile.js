const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL_DEVELOPMENT || process.env.POSTGRES_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: process.env.DEBUG === 'true',
  },
  test: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL_TEST || process.env.POSTGRES_URL_TEST,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: process.env.DEBUG === 'true',
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || process.env.POSTGRES_URL,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: process.env.DEBUG === 'true',
  },
};
