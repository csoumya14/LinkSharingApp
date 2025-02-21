const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Signup route
router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  authController.signup,
);

// Login route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  authController.login,
);

// Protected route (requires authentication)
// GET /api/auth/protected: Requests authenticated user details.
// authMiddleware.verifyToken: Extracts userId from JWT token and attaches it to the request object.
// authController.getAuthenticatedUser: Retrieves user details from the database using the userId.
router.get('/protected', authMiddleware.verifyToken, authController.getAuthenticatedUser);

module.exports = router;
