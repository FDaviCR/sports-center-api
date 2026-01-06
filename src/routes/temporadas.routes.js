const { Router } = require('express');
const temporadasController = require('../controller/TemporadasController');

const router = Router();

router.post('/temporadas', temporadasController.store);
router.get('/temporadas', temporadasController.index);

module.exports = router;