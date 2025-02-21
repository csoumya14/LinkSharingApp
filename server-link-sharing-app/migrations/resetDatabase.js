const pool = require('../config/db');
const createTables = require('./createTables');

const resetDatabase = async () => {
  try {
    console.log('Dropping tables...');
    await pool.query('DROP TABLE IF EXISTS profiles,links,users CASCADE');

    console.log('Tables dropped');
    await createTables();

    console.log('Tables created');
  } catch (err) {
    console.error('Error dropping tables:', err);
  } finally {
    pool.end();
  }
};

resetDatabase();
