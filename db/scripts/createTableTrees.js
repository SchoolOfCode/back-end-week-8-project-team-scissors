const { query } = require("../index");

async function createTableTrees() {
  const res = await query(`CREATE TABLE IF NOT EXISTS trees(
        tree_id SERIAL PRIMARY KEY,
        quantity INTEGER,
        species TEXT,
        longitude DECIMAL(6,4),
        latitude DECIMAL (5,4),
        owner_id INTEGER,
        info TEXT
        )
        `);
  console.log(res);
}

createTableTrees();

// change owner_id thingy to serial and work out how to get it
