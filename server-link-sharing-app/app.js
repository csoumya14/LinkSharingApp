const express = require('express');
const path = require('path');
const app = express();
const requestLogger = require('./middlewares/requestLogger');
const linksRoutes = require('./routes/linksRoutes');
const profileRoutes = require('./routes/profileRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/api/links', linksRoutes); // Base URL for the link router

// Serve files from the 'uploads' directory
app.use(
  '/api/uploads',
  (req, res, next) => {
    console.log(`Static file request - URL: ${req.url}`);
    next();
  },
  express.static(path.join(__dirname, 'uploads')),
);
app.use('/api/profiles', profileRoutes); // Base URL for the profile router

module.exports = app;
