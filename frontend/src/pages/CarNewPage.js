import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Paper
} from '@mui/material';
import api from '../services/api';

function CarNewPage() {
    const [form, setForm] = useState({
        brand: '',
        model: '',
        year: '',
        km: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/cars', {
                model: form.model,
                km: parseInt(form.km),
                year: parseInt(form.year),
                brand: form.brand
            });
            alert('Carro cadastrado com sucesso!');
            navigate('/cars');
        } catch (error) {
            alert('Erro ao cadastrar carro: ' + error.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Adicionar Novo Carro
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="Marca"
                        name="brand"
                        fullWidth
                        margin="normal"
                        value={form.brand}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Modelo"
                        name="model"
                        fullWidth
                        margin="normal"
                        value={form.model}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Ano"
                        name="year"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={form.year}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Quilometragem"
                        name="km"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={form.km}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Salvar
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default CarNewPage;
