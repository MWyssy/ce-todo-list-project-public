const { Pool } = require("pg");

module.exports = new Pool({
  host: "172.19.0.2", // replace with host ip
  port: 5432, // replace with the appropriate port number

  // leave the below values the same
  user: "user",
  password: "password",
  database: "list_items",
});
