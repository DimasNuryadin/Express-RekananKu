const express = require('express');
const router = express.Router();
const { index, viewUser, actionEdit } = require('./controller');

router.get('/', index);
router.get('/view-user', viewUser);
router.put('/edit', actionEdit);

module.exports = router;
