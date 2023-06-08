const { Pool } = require("pg");

if (!process.env.PGDATABASE && !process.env.DATABASEURL) {
  throw new Error("No PGDATABASE or DATABASEURL configured");
}

// needs changing to account for DATABASEURL

module.exports = new Pool();
