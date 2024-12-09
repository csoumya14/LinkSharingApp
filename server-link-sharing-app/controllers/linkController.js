const pool = require('../config/db'); // PostgreSQL connection pool

// Controller function to get all links
getLinks = async (req, res) => {
  try {
    // Fetch all links from the database
    const result = await pool.query('SELECT * FROM links');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching links:', error.message);
    res.status(500).json({ error: 'Error fetching links' });
  }
};
// Controller function to add a new link
addLink = async (req, res) => {
  const { platform, link } = req.body;

  // Validate input data
  if (!platform || !link) {
    return res.status(400).json({ error: 'Platform and link are required' });
  }

  try {
    // Insert the new link into the database
    const result = await pool.query(
      'INSERT INTO links (platform_value, platform_label, platform_icon, link) VALUES ($1, $2, $3, $4) RETURNING *',
      [platform.value, platform.label, platform.icon, link],
    );

    // Return the newly added link
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding link:', error.message);
    res.status(500).json({ error: 'Error adding link' });
  }
};

module.exports = {
  getLinks,
  addLink,
};
