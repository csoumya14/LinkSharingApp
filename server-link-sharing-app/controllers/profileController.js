const { readJsonFile, writeJsonFile } = require('../utils/fileOperations');
const path = require('path');

// Define the path to the profile.json file
const profileFilePath = path.join(__dirname, '../data/profile.json');

// Controller function to get profile data
exports.getProfile = async (req, res) => {
  try {
    // Read the profile data from profile.json
    const profile = await readJsonFile(profileFilePath);
    res.json(profile);
  } catch (error) {
    // Send a 500 error response if reading fails
    console.error('Error reading profile data:', error);
    res.status(500).json({ error: 'Error reading profile data' });
  }
};

// Controller function to update profile data
exports.updateProfile = async (req, res) => {
  const updateData = req.body;

  // Validate that there is at least one field to update
  if (!updateData.firstname && !updateData.lastname && !updateData.email && !updateData.image) {
    return res.status(400).json({ error: 'No fields provided to update' });
  }

  try {
    // Read the current profile data from profile.json
    let profile = await readJsonFile(profileFilePath);

    // Update the profile with the new data provided in the request
    profile = { ...profile, ...updateData };

    // Write the updated profile back to profile.json
    await writeJsonFile(profileFilePath, profile);

    // Send the updated profile data as a response
    res.json(profile);
  } catch (error) {
    // Send a 500 error response if writing fails
    console.error('Error updating profile data:', error);
    res.status(500).json({ error: 'Error updating profile data' });
  }
};
