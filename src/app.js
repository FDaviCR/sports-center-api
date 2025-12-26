const express = require('express');
const paisesRoutes = require('./routes/paises.routes');
const ligasRoutes = require('./routes/ligas.routes');

const app = express();

app.use(express.json());
app.use(paisesRoutes);
app.use(ligasRoutes);

module.exports = app;