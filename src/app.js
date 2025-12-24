const express = require('express');
const paisRoutes = require('./routes/pais.routes');

const app = express();

app.use(express.json());
app.use(paisRoutes);

module.exports = app;