const express = require('express');
const router = express.Router();
const { actionCreate, getDataPerusahaan, actionEdit } = require('./controller');
const { isLoginPlayer } = require('../../middleware/auth');

router.get('/', isLoginPlayer, getDataPerusahaan);
router.post('/', isLoginPlayer, actionCreate);
router.put('/', isLoginPlayer, actionEdit);

module.exports = router;
