const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, upload } = require('../controllers/profileController');

// Route to get profile information
router.get('/', getProfile);

// Route to update profile information
router.put('/', upload.single('image'), updateProfile);
/* upload.single('image'): specifies that the route expects a single file with the field name image*/

module.exports = router;
