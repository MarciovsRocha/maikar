import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import { TextField, Button, Box, Typography } from '@mui/material';

function CarEditPage() {
    const { car_id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        brand: '',
        model: '',
        year: '',
        mileage: ''
    });

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await api.get(`/cars/${car_id}`);
                setForm({
                    brand: res.data.brand,
                    model: res.data.model,
                    year: res.data.year,
                    mileage: res.data.mileage
                });
            } catch (err) {
                alert('Erro ao buscar dados do carro');
                navigate('/cars');
            }
        };

        fetchCar();
    }, [car_id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/cars/${car_id}`, {
                ...form,
                year: parseInt(form.year),
                km: parseInt(form.mileage)
            });
            alert('Carro atualizado com sucesso!');
            navigate('/cars');
        } catch (err) {
            alert('Erro ao atualizar carro');
        }
    };

    return (
        <Box maxWidth="500px" mx="auto" mt={4} p={3} boxShadow={3} borderRadius={2} bgcolor="#fff">
            <Typography variant="h5" gutterBottom>Editar Carro</Typography>
            <form onSubmit={handleSubmit}>
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
                    fullWidth
                    margin="normal"
                    type="number"
                    value={form.year}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Quilometragem"
                    name="mileage"
                    fullWidth
                    margin="normal"
                    type="text"
                    inputMode="numeric"
                    value={form.mileage}
                    onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/\D/g, '');
                        handleChange({ target: { name: 'mileage', value: onlyNumbers } });
                    }}
                    required
                />
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button variant="contained" color="primary" type="submit">
                        Salvar
                    </Button>
                    <Button variant="outlined" onClick={() => navigate('/cars')}>
                        Cancelar
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default CarEditPage;
