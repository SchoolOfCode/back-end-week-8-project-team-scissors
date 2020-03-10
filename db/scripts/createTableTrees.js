const { query } = require("../index");

async function createTableTrees() {
  const res = await query(`CREATE TABLE IF NOT EXISTS trees(
        tree_id SERIAL PRIMARY KEY,
        species TEXT,
        longitude INTEGER,
        latitude INTEGER,
        owner_id SERIAL,
        info TEXT
        )
        `);
  console.log(res);
}

createTableTrees();
