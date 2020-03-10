const { query } = require("../index");

async function createTableConfirmation() {
  const res = await query(`CREATE TABLE IF NOT EXISTS tree_confirmation(
      tree_id SERIAL PRIMARY KEY,
      species TEXT,
      longitude INTEGER,
      latitude INTEGER,
      planted BOOLEAN,
      date_planted DATE
      )
      `);
  console.log(res);
}

createTableConfirmation();
