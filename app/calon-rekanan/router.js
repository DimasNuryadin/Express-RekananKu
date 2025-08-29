const express = require('express');
const router = express.Router();
const { index, viewUser, actionCreate, actionAccept, actionReject, getStatusRekanan, } = require('./controller');

const { isLoginAdmin } = require('../middleware/auth');

router.get('/:userId', getStatusRekanan);
router.post('/create', actionCreate);
router.use(isLoginAdmin);

router.get('/', index);
router.get('/view-user/:userId', viewUser);
router.put('/accept/:id', actionAccept);
router.put('/reject/:id', actionReject);

module.exports = router;
