const { query } = require("../index");

async function createTableConfirmation() {
  const res = await query(`CREATE TABLE IF NOT EXISTS tree_confirmation(
      tree_id SERIAL PRIMARY KEY,
      species TEXT,
      longitude DECIMAL(6,4),
      latitude DECIMAL(5,4),
      
      )
      `);
  console.log(res);
}

createTableConfirmation();
