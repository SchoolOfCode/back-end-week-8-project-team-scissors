const { query } = require("../index");

async function createTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS planters(
        id SERIAL PRIMARY KEY, 
        first_name TEXT,
        last_name TEXT,
        password TEXT,
        organisation_name TEXT,
        email_address TEXT,
        phone_number INTEGER,
        info TEXT
    )
    `);
  console.log(res);
}

createTable();
