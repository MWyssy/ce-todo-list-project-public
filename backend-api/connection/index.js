const { Pool } = require("pg");

module.exports = new Pool({
  host: "postgres-db", // replace with host ip
  port: 5432, // replace with the appropriate port number

  // leave the below values the same
  user: "user",
  password: "password",
  database: "list_items",
});
