const { query } = require("../index");

async function createTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY, 
        first name TEXT,
        last name TEXT,
        password TEXT,
        organisation name TEXT,
        email address TEXT,
        phone number INTEGER,
        info TEXT,
        photo IMAGE
    )
    `);
  console.log(res);
}

createTable();
