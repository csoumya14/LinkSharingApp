const pool = require('../config/db');

const createTables = async () => {
  const authenticationTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  const profileTableQuery = `
    CREATE TABLE IF NOT EXISTS profiles (
      id SERIAL PRIMARY KEY,
      user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
      email VARCHAR(255) NOT NULL,
      image TEXT,
      first_name VARCHAR(50),
      last_name VARCHAR(50)
    );
  `;

  const linksTableQuery = `
    CREATE TABLE IF NOT EXISTS links (
      id SERIAL PRIMARY KEY,
      profile_id INT REFERENCES profiles(id) ON DELETE CASCADE,
      platform_value VARCHAR(50),
      platform_label VARCHAR(50),
      platform_icon VARCHAR(50),
      link TEXT,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(authenticationTableQuery);
    console.log('Authentication table created');
    await pool.query(profileTableQuery);
    console.log('Profile table created');
    await pool.query(linksTableQuery);
    console.log('Link table created');
  } catch (err) {
    console.error('Error creating tables:', err);
  } /* finally {
    pool.end();
  } */
};

module.exports = createTables;
