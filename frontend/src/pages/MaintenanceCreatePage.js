import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import {
    TextField, Button, Container, Typography,
    MenuItem, Select, InputLabel, FormControl
} from '@mui/material';

function MaintenanceCreatePage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        car_id: '',
        date: '',
        next_revision: '',
        notes: ''
    });

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                alert('Erro ao buscar carros: ' + error.message);
            }
        };

        fetchCars();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/maintenance', form);
            navigate('/maintenances');
        } catch (error) {
            alert('Erro ao criar manutenção: ' + error.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" gutterBottom>Nova Manutenção</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal" required>
                    <InputLabel id="car-select-label">Carro</InputLabel>
                    <Select
                        labelId="car-select-label"
                        name="car_id"
                        value={form.car_id}
                        onChange={handleChange}
                        label="Carro"
                    >
                        {cars.map((car) => (
                            <MenuItem key={car.id} value={car.id}>
                                {car.brand} - {car.model}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField label="Data" name="date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={form.date} onChange={handleChange} required />
                <TextField label="Próxima Revisão" name="next_revision" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={form.next_revision} onChange={handleChange} required />
                <TextField label="Observações" name="notes" fullWidth margin="normal" value={form.notes} onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Criar</Button>
            </form>
        </Container>
    );
}

export default MaintenanceCreatePage;
