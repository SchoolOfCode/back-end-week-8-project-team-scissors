const { query } = require("../db");

const bcrypt = require("bcryptjs");

async function registerUser({ email, password }) {
  //take in data
  console.log({ email, password });
  const hash = await bcrypt.hash(password, 10);
  // save data in database
  // make sure we have right data
  // write query string- insert user to db
  const response = await query(
    `
  INSERT INTO users (
      email,
      password
      )
      VALUES (
          $1,
          $2
      ) RETURNING email
  `,
    [email, hash]
  );
  return response.rowCount > 0 ? response.rows[0].email : null;

  // give query the values it needs
  // save response in a variable
  // send back confirmation
  // return successful response
}

async function loginUser({ password, username }) {
  const res = await query(`SELECT password FROM users WHERE email = $1`, [
    username
  ]);
  console.log(res.rows[0]);
  const hash = res.rows[0].password;

  const success = await bcrypt.compare(password, hash);
  return success;
}

module.exports = { registerUser, loginUser };
