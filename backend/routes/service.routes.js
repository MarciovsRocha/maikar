const express = require('express');
const router = express.Router();
const { getByMaintenance } = require('../controller/service.controller');
const auth = require('../middleware/auth.middleware');

router.get('/:maintenance_id', auth, getByMaintenance);

module.exports = router;
