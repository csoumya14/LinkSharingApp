const express = require('express');
const app = express();
const requestLogger = require('./middlewares/requestLogger');
const linksRoutes = require('./routes/linksRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use(express.json());
app.use(requestLogger);
app.use('/api/links', linksRoutes);
app.use('/api/profile', profileRoutes);

module.exports = app;
