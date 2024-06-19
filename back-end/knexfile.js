const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL_DEVELOPMENT || {
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT || 5432,
      ssl: {
        rejectUnauthorized: false, // Use only for local development if self-signed SSL certificate is used
      },
    },
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
    connection: process.env.DATABASE_URL_TEST || {
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT || 5432,
      ssl: {
        rejectUnauthorized: false, // Use only for local development if self-signed SSL certificate is used
      },
    },
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
    connection: process.env.DATABASE_URL || {
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT || 5432,
      ssl: {
        rejectUnauthorized: true, // Always use true for production to enforce SSL
      },
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: process.env.DEBUG === 'true',
  },
};
