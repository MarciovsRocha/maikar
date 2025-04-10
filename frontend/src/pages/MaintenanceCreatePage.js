import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { TextField, Button, Container, Typography } from '@mui/material';

function MaintenanceCreatePage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        car_id: '',
        date: '',
        next_revision: '',
        notes: ''
    });

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
                <TextField label="ID do Carro" name="car_id" fullWidth margin="normal" value={form.car_id} onChange={handleChange} required />
                <TextField label="Data" name="date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={form.date} onChange={handleChange} required />
                <TextField label="Próxima Revisão" name="next_revision" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={form.next_revision} onChange={handleChange} required />
                <TextField label="Observações" name="notes" fullWidth margin="normal" value={form.notes} onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Criar</Button>
            </form>
        </Container>
    );
}

export default MaintenanceCreatePage;
