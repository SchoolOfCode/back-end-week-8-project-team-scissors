const { query } = require("../index");

async function createTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS planters(
        id SERIAL PRIMARY KEY, 
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        password TEXT NOT NULL,
        organisation_name TEXT,
        email_address TEXT NOT NULL,
        phone_number INTEGER,
        info TEXT
    )
    `);
  console.log(res);
}

createTable();