const express = require('express');
const router = express.Router();
const { index, viewUser, actionCreate, actionAccept, actionReject, } = require('./controller');

router.get('/', index);
router.get('/view-user', viewUser);
router.post('/create', actionCreate);
router.put('/accept/:id', actionAccept);
router.put('/reject/:id', actionReject);

module.exports = router;
