const { query } = require("../db");

const bcrypt = require("bcryptjs");

async function registerUser({
  first_name,
  last_name,
  password,
  organisation_name,
  email_address,
  phone_number,
  info
}) {
  //take in data
  console.log({
    first_name,
    last_name
  });
  const hash = await bcrypt.hash(password, 10);
  // save data in database
  // make sure we have right data
  // write query string- insert user to db
  const response = await query(
    `
  INSERT INTO planters (
        first_name,
        last_name,
        password,
        organisation_name,
        email_address,
        phone_number,
        info
      
      )
      VALUES ( 
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          $7
      ) RETURNING email_address
  `,
    [
      first_name,
      last_name,
      hash,
      organisation_name,
      email_address,
      phone_number,
      info
    ]
  );
  return response.rowCount > 0 ? response.rows[0].email_address : null;

  // give query the values it needs
  // save response in a variable
  // send back confirmation
  // return successful response
}

async function loginUser({ email_address, password }) {
  const res = await query(
    `SELECT password FROM planters WHERE email_address = $1`,
    [email_address]
  );
  console.log(res.rows[0]);
  const hash = res.rows[0].password;

  const success = await bcrypt.compare(password, hash);
  return success;
}

async function registerTrees({
  quantity,
  species,
  longitude,
  latitude,
  owner_id,
  info
}) {
  const res = await query(
    `
  INSERT INTO trees (
      quantity,
      species,
      longitude,
      latitude,
      owner_id,
      info
      )
      VALUES (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6
      ) RETURNING species
  `,
    [quantity, species, longitude, latitude, owner_id, info]
  );
  return res.rowCount > 0 ? res.rows[0].species : null;
}

module.exports = { registerUser, loginUser, registerTrees };
