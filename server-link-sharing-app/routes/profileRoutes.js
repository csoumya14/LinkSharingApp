const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, upload } = require('../controllers/profileController');

// Middleware to log all requests to this router
router.use((req, res, next) => {
  console.log(`Request received - Method: ${req.method}, URL: ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  console.log('Body:', req.body);
  next();
});

// Route to get profile information
router.get('/:id', getProfile);

/* router.put(
  '/',
  (req, res, next) => {
    console.log('Pre-Multer middleware reached');
    next();
  },
  upload.single('image'),
  (req, res, next) => {
    console.log('Post-Multer middleware reached');
    console.log('File in route:', req.file); // Check if Multer populated `req.file`
    console.log('Body in route:', req.body);
    next();
  },
  updateProfile,
);
 */
// Route to update profile information
router.put('/:id', upload.single('image'), updateProfile);
/* upload.single('image'): specifies that the route expects a single file with the field name image*/

module.exports = router;
