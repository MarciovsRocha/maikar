const express = require('express');
const router = express.Router();
const carController = require('../controller/car.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Todas as rotas exigem autenticação
router.use(authMiddleware);

// Criar carro
router.post('/', carController.createCar);

// Buscar todos os carros
router.get('/', carController.getAllCars);

// Buscar carro por ID
router.get('/:id', carController.getCarById);

// Atualizar carro
router.put('/:id', carController.updateCar);

// Deletar carro
router.delete('/:id', carController.deleteCar);

// Selecionar meus carros
router.get('/my', carController.getCarsByTokenUser);

module.exports = router;
