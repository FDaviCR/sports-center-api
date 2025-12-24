const { Router } = require('express');
const PaisController = require('../controllers/PaisController');

const router = Router();

router.post('/pais', PaisController.store);
router.get('/pais', PaisController.loadAll);


module.exports = router;