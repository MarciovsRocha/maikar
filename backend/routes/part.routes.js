const express = require('express');
const router = express.Router();
const { getByMaintenance, update, create, deleteById } = require('../controller/part.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.get('/:maintenance_id', getByMaintenance);
router.put('/:id', update);
router.post('/', create);
router.delete('/:id', deleteById);

module.exports = router;
