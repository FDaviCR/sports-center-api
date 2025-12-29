const { Router } = require('express');
const TimesController = require('../controller/TimesController');

const router = Router();

router.get('/times', TimesController.loadAll);
router.get('/list/times', TimesController.index);

module.exports = router;