const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.POSTGRES_URL_NON_POOLING || process.env.DATABASE_URL_DEVELOPMENT,
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
    connection: process.env.POSTGRES_URL_NO_SSL || process.env.DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: process.env.DEBUG === 'true',
  },
  preview: {
    client: 'postgresql',
    connection: process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL_PREVIEW,
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
    connection: process.env.POSTGRES_URL || process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    debug: process.env.DEBUG === 'true',
  },
};
