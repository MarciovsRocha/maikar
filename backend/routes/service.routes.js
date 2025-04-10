const express = require('express');
const router = express.Router();
const { getByMaintenance, create, update, deleteById } = require('../controller/service.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.get('/:maintenance_id', getByMaintenance)
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteById);

module.exports = router;
