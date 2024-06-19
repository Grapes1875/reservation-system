const path = require('path');

const {
  DATABASE_URL,
  DATABASE_URL_DEVELOPMENT,
  DATABASE_URL_TEST,
  DATABASE_URL_PREVIEW,
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: !!DEBUG,
  },
  test: {
    client: 'postgresql',
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: 'postgresql',
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: !!DEBUG,
  },
  production: {
    client: 'postgresql',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: !!DEBUG,
  },
};
