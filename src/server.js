const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
    console.log('Banco conectado');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});