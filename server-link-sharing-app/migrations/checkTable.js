const pool = require('../config/db');

const checkTableExists = async tableName => {
  try {
    const result = await pool.query(
      'SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = $1);',
      [tableName],
    );
    console.log(`✅ Table '${tableName}' exists:`, result.rows[0].exists);
  } catch (error) {
    console.error('❌ Error checking table existence:', error.message);
  } finally {
    pool.end();
  }
};

checkTableExists('links'); // Change to your table name
