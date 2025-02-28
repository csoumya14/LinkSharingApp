const multer = require('multer');
const path = require('path');
const pool = require('../config/db'); // PostgreSQL connection pool

// configure multer storage
/* const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); //
  },
  filename: (req, file, cb) => {
    if (!file.originalname) {
      return cb(new Error('File data is missing'));
    }
    cb(null, Date.now() + path.extname(file.originalname).toLowerCase());
  },
});


const upload = multer({ storage: storage });
exports.upload = upload; */

// Controller function to get profile data
getProfile = async (req, res) => {
  try {
    const userIdFromToken = req.user.userId;
    const userIdFromParams = parseInt(req.params.id, 10);
    if (userIdFromToken !== userIdFromParams) {
      return res.status(403).json({ error: 'Unauthorized: You can only access your own profile' });
    }
    // Fetch the profile data from the database
    const result = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [userIdFromToken]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    // Send a 500 error response if reading fails
    console.error('Error fetching profile data:', error);
    res.status(500).json({ error: 'Error fetching profile data' });
  }
};

createProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { firstName, lastName, email } = req.body;
    const file = req.file;
    console.log(' Received profile creation request');
    console.log(' User ID from token:', userId);
    console.log(' Email:', email);
    console.log(' Name:', firstName, lastName);
    console.log(' Uploaded File:', file);

    // Check if a profile already exists for the user
    const existingProfile = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [userId]);
    if (existingProfile.rows.length > 0) {
      return res.status(400).json({ error: 'Profile already exists for this user' });
    }

    // Generate the image URL if a file was uploaded
    const imagePath = file
      ? `${req.protocol}://${req.get('host')}/api/uploads/${file.filename}`
      : null;

    // Insert the new profile into the database
    const result = await pool.query(
      'INSERT INTO profiles (user_id, first_name, last_name, email, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, firstName, lastName, email, imagePath],
    );

    res.status(201).json({ message: 'Profile created successfully', profile: result.rows[0] });
  } catch (error) {
    console.error('Error creating profile:', error.message);
    res.status(500).json({ error: 'Error creating profile', details: error.message });
  }
};
// Controller function to update profile data
updateProfile = async (req, res) => {
  console.log('Inside controller - req.file:', req.file); // Log file object
  console.log('Inside controller - req.body:', req.body); // Log body object

  const userIdFromToken = req.user.userId;
  const profileIdFromParams = parseInt(req.params.id);

  // Validate that there is at least one field to update
  if (!req.file && Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'No fields provided to update' });
  }

  try {
    // Check if profile exists and belongs to the authenticated user
    const checkProfile = await pool.query('SELECT * FROM profiles WHERE id = $1 and user_id = $2', [
      profileIdFromParams,
      userIdFromToken,
    ]);

    if (checkProfile.rows.length === 0) {
      return res.status(403).json({ error: 'Unauthorized: You can only update your own profile.' });
    }
    const updateData = req.body;
    const file = req.file;
    // Construct SQL query dynamically based on provided fields
    const fields = [];
    const values = [];
    let query = 'UPDATE profiles SET';

    if (updateData.firstName) {
      fields.push(`first_name = $${fields.length + 1}`);
      values.push(updateData.firstName);
    }

    if (updateData.lastName) {
      fields.push(`last_name = $${fields.length + 1}`);
      values.push(updateData.lastName);
    }

    if (updateData.email) {
      fields.push(`email = $${fields.length + 1}`);
      values.push(updateData.email);
    }

    // If a file was uploaded, add the file path to the profile data
    if (file) {
      const imagePath = `${req.protocol}://${req.get('host')}/api/uploads/${file.filename}`;
      fields.push(`image = $${fields.length + 1}`);
      values.push(imagePath);
    }

    if (fields.length === 0) {
      return res.status(400).json({ error: 'No fields provided to update' });
    }
    // Complete the query
    query +=
      ' ' +
      fields.join(', ') +
      ` WHERE id = $${fields.length + 1} AND user_id = $${fields.length + 2}`;
    values.push(profileIdFromParams, userIdFromToken); // Add the profile ID and user ID to the values array

    console.log('Generated Query:', query);
    console.log('Values:', values);

    // Execute the query
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Profile not found or authorized' });
    }

    // Fetch the updated profile
    const updatedProfile = await pool.query(
      'SELECT * FROM profiles WHERE id = $1 AND user_id = $2',
      [profileIdFromParams, userIdFromToken],
    );
    res.json(updatedProfile.rows[0]);
  } catch (error) {
    // Send a 500 error response if writing fails
    console.error('Error updating profile data:', error);
    console.error('Stack Trace:', error.stack);
    res.status(500).json({ error: 'Error updating profile data', details: error.message });
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
};
