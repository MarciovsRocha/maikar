const express = require('express');
const router = express.Router();
const { getAll, create } = require('../controller/maintenance.controller');
const auth = require('../middleware/auth.middleware');

router.get('/', auth, getAll);
router.post('/', auth, create);

module.exports = router;
