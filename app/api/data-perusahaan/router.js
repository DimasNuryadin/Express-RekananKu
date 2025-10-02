const express = require('express');
const router = express.Router();
const { actionCreate, actionEdit, actionGet } = require('./controller');
const { isLoginPlayer } = require('../../middleware/auth');

router.get('/', isLoginPlayer, actionGet);
router.post('/', isLoginPlayer, actionCreate);
router.put('/', isLoginPlayer, actionEdit);

module.exports = router;
