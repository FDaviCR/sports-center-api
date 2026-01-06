const express = require('express');
const paisesRoutes = require('./routes/paises.routes');
const ligasRoutes = require('./routes/ligas.routes');
const logAtualizacoesRoutes = require('./routes/logAtualizacoes.routes');
const timesRoutes = require('./routes/times.routes');
const temporadasRoutes = require('./routes/temporadas.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(paisesRoutes);
app.use(timesRoutes);
app.use(ligasRoutes);
app.use(temporadasRoutes);
app.use(logAtualizacoesRoutes);

module.exports = app;