const { readJsonFile, writeJsonFile } = require('../utils/fileOperations');
const multer = require('multer');
const path = require('path');

/* the diskStorage method from the multer library is used to configure how files should be 
stored on the servers file system. It allows you to define:
 where to save the files and how to name the files
 */

// Define the path to the profile.json file
const profileFilePath = path.join(__dirname, '../data/profile.json');

/* desitnation is a callback function where you specify the directory where the uploaded files should be stored
req: HTTP request object, file: information about the uploaded file
cb: callback function to pass the destiantion path
path.join(__dirname, '../uploads'): __dirname refers to the current directory of the script
../uploads navigates one level up from the current directory and looks for an upload folder. This ensures
 that the upload files will be saved in the upload directory relative to the scripts location
 Callback: The first argument null is for the error if any. Here its set to null because there is no error.
 The second argument is the path to the directory where files should be saved.
 The filename function determines the name of the uploaded file.
 file.fieldname: The name of the form field used to upload the file.
 Date.now(): A timestamp to ensure filenames are unique.
 Math.round(Math.random()*1E9: A randomly generated number to further avoid filename collisions
 path.extname(file.originalname):Extracts the file extension(eg .jpg,.png) from the original file name
 example: If the uploaded file was named profile-pic.jpg and the form field was image, the resulting
 filename might be: image-1637093420487-834897123.jpg
 Callback: The first argument (null) is for the error
 The second argument is the generated filename.
*/

// configure multer storage
const storage = multer.diskStorage({
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

/*This initializes multer with the specified storage configuration. The upload object is now ready
to be used as middleware in routes to handle file uploads.*/
const upload = multer({ storage: storage });

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
  console.log('Inside controller - req.file:', req.file); // Log file object
  console.log('Inside controller - req.body:', req.body); // Log body object

  if (!req.file || !req.body) {
    return res.status(400).json({ error: 'File or fields not provided' });
  }
  const updateData = req.body;

  const file = req.file;

  // Validate that there is at least one field to update
  if (!updateData.firstName && !updateData.lastName && !updateData.email && !updateData.image) {
    return res.status(400).json({ error: 'No fields provided to update' });
  }

  try {
    // Read the current profile data from profile.json
    let profile = await readJsonFile(profileFilePath);

    // Update the profile with the new data provided in the request
    profile = { ...profile, ...updateData };

    // If a file was uploaded, add the file path to the profile data
    if (file) {
      profile.image = `${req.protocol}://${req.get('host')}/api/uploads/${file.filename}`; //`api/uploads/${file.filename}`; // Save relative path to the profile
    }

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

exports.upload = upload;
