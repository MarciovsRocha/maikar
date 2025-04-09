const express = require('express');
const router = express.Router();
const { getByMaintenance, create, update, deleteService } = require('../controller/service.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.get('/:maintenance_id', getByMaintenance);

module.exports = router;
