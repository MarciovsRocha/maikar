const express = require('express');
const router = express.Router();
const { getAll, getById, create, deleteById, update } = require('../controller/maintenance.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', deleteById);
router.put('/:id', update);

module.exports = router;
