const express = require('express');
const router = express.Router();
const { actionCreate, actionDelete, getDataPerusahaan, getAllDataPerusahaan, } = require('./controller');
const { isLoginPlayer } = require('../middleware/auth');

router.get('/', getAllDataPerusahaan);
router.get('/:userId', isLoginPlayer, getDataPerusahaan);
router.post('/', isLoginPlayer, actionCreate);
router.delete('/:id', isLoginPlayer, actionDelete);

module.exports = router;
