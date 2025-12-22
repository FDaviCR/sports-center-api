const express = require('express');
//const usuarioRoutes = require('./routes/usuario.routes');

const app = express();

app.use(express.json());
//app.use(usuarioRoutes);

module.exports = app;