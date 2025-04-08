const express = require('express');
const router = express.Router();
const { getByMaintenance } = require('../controller/part.controller');
const auth = require('../middleware/auth.middleware');

router.get('/:maintenance_id', auth, getByMaintenance);

module.exports = router;
