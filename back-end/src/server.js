const { PORT = 5001, DATABASE_URL } = process.env;

const app = require("./app");
const knex = require("./db/connection");

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("Database migrations applied:", migrations);

    // Start the server only after migrations are applied
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error running database migrations:", error);
    knex.destroy();
    process.exit(1); // Exit the process with error status
  });

// Ensure knex.client.pool.defaults.ssl is initialized properly
if (DATABASE_URL && DATABASE_URL.includes("https://")) {
  knex.client.pool.defaults.ssl = { rejectUnauthorized: false };
}

module.exports = app;
