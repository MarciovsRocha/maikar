require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/car.routes');
const maintenanceRoutes = require('./routes/maintenance.routes');
const partRoutes = require('./routes/part.routes');
const serviceRoutes = require('./routes/service.routes');

app.use('/api/auth', authRoutes);
app.use('/api/cars', userRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/parts', partRoutes);
app.use('/api/services', serviceRoutes);

app.get('/', (req, res) => res.send('API de Manutenção de Carros rodando!'));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
