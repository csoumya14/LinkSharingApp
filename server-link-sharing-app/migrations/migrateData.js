const { readJsonFile } = require('../utils/fileOperations'); // Import the utility function
const pool = require('../config/db'); // PostgreSQL connection pool

const migrateData = async () => {
  try {
    // Read profile.json using the utility function
    const profileData = await readJsonFile('./data/profile.json');

    // Insert Profile Data
    const profileInsertQuery = `
      INSERT INTO profiles (email, image, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `;

    const profileResult = await pool.query(profileInsertQuery, [
      profileData.email,
      profileData.image,
      profileData.firstName,
      profileData.lastName,
    ]);

    const profileId = profileResult.rows[0].id; // Get the inserted profile ID

    console.log(`Inserted profile with ID: ${profileId}`);

    // Read links.json using the utility function
    const linksData = await readJsonFile('./data/links.json');

    // Insert Links Data
    const linkInsertQuery = `
      INSERT INTO links (profile_id, platform_value, platform_label, platform_icon, link)
      VALUES ($1, $2, $3, $4, $5);
    `;

    for (const link of linksData) {
      const platform = link[0].platform;

      await pool.query(linkInsertQuery, [
        profileId,
        platform.value,
        platform.label,
        platform.icon,
        link[0].link,
      ]);

      console.log(`Inserted link for platform: ${platform.label}`);
    }

    console.log('Data migration completed successfully!');
  } catch (err) {
    console.error('Error during data migration:', err.message);
  } finally {
    // Close the database connection
    pool.end();
  }
};

// Execute the migration
migrateData();
