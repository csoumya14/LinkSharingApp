const pool = require('../config/db'); // PostgreSQL connection pool

// Controller function to get all links
getLinks = async (req, res) => {
  try {
    // Fetches all rows from the links table in the database
    const result = await pool.query('SELECT * FROM links');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching links:', error.message);
    res.status(500).json({ error: 'Error fetching links' });
  }
};
// Controller function to add a new link
addLink = async (req, res) => {
  console.log('Received request body:', req.body);
  const links = req.body; // Expecting an array of link objects

  // Validate input data
  if (!Array.isArray(links) || links.length === 0) {
    return res
      .status(400)
      .json({ error: 'Invalid data format. Expected a non-empty array of links.' });
  }
  /*SQL inserts a new row into the links table with four values: platform_value, platform_label
platform_icon, link. $1, $2, $3, $4 are placeholders for dynamic values provided by 
the array [platform.value, platform.label, platform.icon, link]
RETURNING * After the insertion, this clause returns the entire newly added row. Useful to confirm the insertion
and send the added record back to the client. */
  try {
    // Insert each link into the database
    const promises = links.map(link =>
      pool.query(
        'INSERT INTO links (platform_value, platform_label, platform_icon, link) VALUES ($1, $2, $3, $4) RETURNING *',
        [link.platform?.value, link.platform?.label, link.platform?.icon, link.link],
      ),
    );

    // Wait for all insertions to complete
    const results = await Promise.all(promises);

    // Return the newly added link
    res.status(201).json(results.map(result => result.rows[0]));
  } catch (error) {
    console.error('Error adding link:', error.message);
    res.status(500).json({ error: 'Error adding link' });
  }
};

module.exports = {
  getLinks,
  addLink,
};
