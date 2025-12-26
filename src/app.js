const express = require('express');
const paisesRoutes = require('./routes/paises.routes');
const ligasRoutes = require('./routes/ligas.routes');
const LogAtualizacoesRoutes = require('./routes/logAtualizacoes.routes');

const app = express();

app.use(express.json());
app.use(paisesRoutes);
app.use(ligasRoutes);
app.use(LogAtualizacoesRoutes);

module.exports = app;