const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const pool = require('../config/db');
const { get } = require('../app');

const JWT_SECRET = process.env.JWT_SECRET;

// User signup
signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    // Select all columns from the users table where the email matches the provided email
    // $1 is a placeholder for the first parameter in the array [email]
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    // pool.query returns an object with the following structure
    /* {
      command: 'SELECT',
      rowCount: 1,      // Number of rows returned
      oid: null,
      rows: [           // The actual data rows
        { id: 1, email: 'test@example.com', password: 'hashedpassword123' }
      ],
      fields: [...]     // Metadata about fields (columns)
    } */

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }
    /*It hashes the password using the bcrypt.js library. The hashing algorithm makes the
    password more secure before storing it in the database. The second argument 10 represents
    the number of salt rounds. A higher salt round value makes the password harder to crack
    but slower to hash. A salt is a random string added to the password before hashing. It
    ensures that two identical passwords do not generate the same hash. Even if two users have 
    the same password, their hashes will be different. */
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, hashedPassword],
    );
    /*Creates a new JWT token. This token will be sent to the client after login/signup.
    { userId: newUser.rows[0].id }, this is the payload(data stored inside the token. In this case
     it includes the userId and this allows the client to send the token later to identify the user.
     JWT_SECRET is the private key stored in the .env file used to sign and verify the token. The token
     will expires in 1h.*/
    const token = jwt.sign({ userId: newUser.rows[0].id }, JWT_SECRET, {
      expiresIn: '1h',
    });
    /*After signing up or logging in the server sends the JWT token to the client. The client stores the token(eg in localStorage of sessionStorage. The client sends the token in every future request to authenticate the user.) */
    res.json({ user: newUser.rows[0], token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// User login
login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.rows[0].password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user.rows[0].id }, JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ user: user.rows[0], token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Protected route Example
// req(Request Object): Contains data sent from the client.
// res(Response Object): Used to send a response back to the client.
// Retrieves the authenticated user data from the database and sends it back to the client. Ensures the user is authenticated by checking the token sent by the client.
getAuthenticatedUser = async (req, res) => {
  // pool.query(...) executes the SQL query and returns a promise. The await keyword is used to wait for the promise to resolve.
  //[req.user.userId] is an array containing the user ID extracted from the JWT token sent by the client.
  // userId is decoded from the JWT token in the authMiddleware.verifyToken function.
  try {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.userId]);
    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'Unauthorized' });
    }
    /*If the user exists, their data is sent back to the client.
    user.rows[0]: retrieves the first row(since there should be only one user per ID)
    response example:
    {
      "user": {
      "id": 1,
      "email": "test@example.com",
      "password": "$2a$10$saltedHashedPassword"
      }
    }
*/
    // exclude password before sending the user data to prevents exposing hashed passwords in API responses.
    const { password, ...userData } = user.rows[0];
    res.json({ user: userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  signup,
  login,
  getAuthenticatedUser,
};
