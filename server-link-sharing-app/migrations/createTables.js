const pool = require('../config/db');

const createTables = async () => {
  const profileTableQuery = `
    CREATE TABLE IF NOT EXISTS profiles (
      id SERIAL PRIMARY KEY,
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
      link TEXT
    );
  `;

  try {
    await pool.query(profileTableQuery);
    console.log('Profile table created');
    await pool.query(linksTableQuery);
    console.log('Link table created');
  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    pool.end();
  }
};

createTables();
