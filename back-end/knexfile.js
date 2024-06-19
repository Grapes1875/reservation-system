const path = require('path');

module.exports = (environment) => {
  const config = {
    client: 'postgresql',
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: process.env.DEBUG === 'true',
  };

  if (environment === 'development') {
    config.connection = process.env.DATABASE_URL_DEVELOPMENT || process.env.POSTGRES_URL_DEVELOPMENT;
  } else if (environment === 'test') {
    config.connection = process.env.DATABASE_URL_TEST || process.env.POSTGRES_URL_TEST;
  } else if (environment === 'production') {
    config.connection = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  } else {
    throw new Error('Environment not properly set.');
  }

  return config;
};
