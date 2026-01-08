const { Router } = require('express');
const PartidasController = require('../controller/PartidasController');

const router = Router();

router.get('/', PartidasController.index);
router.get('/:id', PartidasController.show);
router.post('/', PartidasController.store);
router.put('/:id', PartidasController.update);
router.delete('/:id', PartidasController.delete);

module.exports = router;
