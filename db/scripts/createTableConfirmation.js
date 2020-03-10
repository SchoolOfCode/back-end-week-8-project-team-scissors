async function createTableConfirmation() {
  const res3 = await query(`CREATE TABLE IF NOT EXISTS treeConfirmation(
      tree id SERIAL PRIMARY KEY,
      species TEXT,
      longitude INTEGER,
      latitude INTEGER,
      planted BOOLEAN,
      date planted DATE
      )
      `);
  console.log(res3);
}

createTableConfirmation();