async function createTableTrees() {
  const res2 = await query(`CREATE TABLE IF NOT EXISTS trees(
        tree id SERIAL PRIMARY KEY,
        species TEXT,
        longitude INTEGER,
        latitude INTEGER,
        owner id TEXT,
        info TEXT
        )
        `);
  console.log(res2);
}

createTableTrees();
