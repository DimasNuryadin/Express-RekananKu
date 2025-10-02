const express = require('express');
const router = express.Router();
const { actionCreate, actionDelete, getDataPerusahaan, getAllDataPerusahaan, } = require('./controller');
// const { isLoginPlayer } = require('../middleware/auth');

router.get('/', getAllDataPerusahaan);
router.get('/:userId', getDataPerusahaan);
router.post('/', actionCreate);
router.delete('/:id', actionDelete);

module.exports = router;
