const { query } = require("../db");

const bcrypt = require("bcryptjs");

async function registerUser({ email_address, password }) {
  //take in data
  console.log({ email_address, password });
  const hash = await bcrypt.hash(password, 10);
  // save data in database
  // make sure we have right data
  // write query string- insert user to db
  const response = await query(
    `
  INSERT INTO planters (
      email_address,
      password
      )
      VALUES ( 
          $1,
          $2
      ) RETURNING email_address
  `,
    [email_address, hash]
  );
  return response.rowCount > 0 ? response.rows[0].email_address : null;

  // give query the values it needs
  // save response in a variable
  // send back confirmation
  // return successful response
}

async function loginUser({ email_address, password }) {
  const res = await query(`SELECT password FROM planters WHERE email = $1`, [
    email_address
  ]);
  console.log(res.rows[0]);
  const hash = res.rows[0].password;

  const success = await bcrypt.compare(password, hash);
  return success;
}

module.exports = { registerUser, loginUser };
