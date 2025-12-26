const { Router } = require('express');
const PaisesController = require('../controller/PaisesController');

const router = Router();

router.get('/paises', PaisesController.loadAll);
router.get('/list/paises', PaisesController.index);

module.exports = router;