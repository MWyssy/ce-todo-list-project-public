const { Pool } = require("pg");

if (!process.env.PGDATABASE && !process.env.DATABASEURL) {
  throw new Error("No PGDATABASE or DATABASEURL configured");
}

module.exports = new Pool();
