const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Route to get profile information
router.get('/', profileController.getProfile);

// Route to update profile information
router.put('/', profileController.updateProfile);

module.exports = router;
