const { Router } = require('express');
const LigasController = require('../controller/LigasController');

const router = Router();

router.get('/ligas', LigasController.loadAll);
router.get('/list/ligas', LigasController.index);

module.exports = router;