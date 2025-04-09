const express = require('express');
const router = express.Router();
const { getAll, create } = require('../controller/maintenance.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.get('/', getAll);
router.post('/', create);

module.exports = router;
