const { Router } = require('express');
const LogAtualizacoesController = require('../controller/LogAtualizacoesController');

const router = Router();

router.get('/list/LogAtualizacoes', LogAtualizacoesController.findAll);

module.exports = router;