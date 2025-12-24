const { Router } = require('express');
const PaisController = require('../controller/PaisController');

const router = Router();

router.get('/paises', PaisController.loadAll);
router.get('/list/paises', PaisController.findAll);

module.exports = router;