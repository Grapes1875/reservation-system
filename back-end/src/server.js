const { PORT = 5001, DATABASE_URL } = process.env;

const app = require("./app");
const knex = require("./db/connection");

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("Database migrations applied:", migrations);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error running database migrations:", error);
    knex.destroy();
    process.exit(1); // Exit the process with error status
  });

// Configure SSL mode for PostgreSQL connection
knex.client.pool.defaults.ssl = {
  rejectUnauthorized: false, // Adjust as per your PostgreSQL setup
};

module.exports = app;
