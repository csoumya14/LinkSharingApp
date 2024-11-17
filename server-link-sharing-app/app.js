const express = require('express');
const app = express();
const requestLogger = require('./middlewares/requestLogger');
const linksRoutes = require('./routes/linksRoutes');
const profileRoutes = require('./routes/profileRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/api/links', linksRoutes); // Base URL for the link router
app.use('/api/profile', profileRoutes); // Base URL for the profile router

module.exports = app;
