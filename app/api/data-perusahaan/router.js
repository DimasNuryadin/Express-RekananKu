const express = require('express');
const router = express.Router();
const { actionEdit, actionGet } = require('./controller');
const { isLoginPlayer } = require('../../middleware/auth');

router.get('/', isLoginPlayer, actionGet);
router.put('/', isLoginPlayer, actionEdit);

module.exports = router;
