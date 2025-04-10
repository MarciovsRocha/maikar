import { useState } from 'react';
import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../services/api';

function ServiceForm({ maintenanceId, services, setServices }) {
    const [service, setService] = useState({
        description: '',
        cost: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/services', {
                maintenance_id: maintenanceId,
                description: service.description,
                cost: service.cost
            });
            setService({ description: '', cost: '' });
            const response = await api.get(`/services/${maintenanceId}`);
            setServices(response.data);
        } catch (error) {
            alert('Erro ao adicionar serviço: ' + error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/services/${id}`);
            setServices((prev) => prev.filter((s) => s.id !== id));
        } catch (error) {
            alert('Erro ao excluir serviço: ' + error.message);
        }
    };

    return (
        <Box>
            <Typography variant="h6" sx={{ mt: 4 }}>Serviços</Typography>

            {services.map((s) => (
                <Box
                    key={s.id}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 1, p: 1, border: '1px solid #ccc', borderRadius: 2 }}
                >
                    <Typography variant="body2">
                        {s.service_description} - R$ {s.cost}
                    </Typography>
                    <IconButton color="error" onClick={() => handleDelete(s.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}

            <form onSubmit={handleSubmit}>
                <TextField name="description" label="Descrição" fullWidth margin="normal" value={service.description} onChange={handleChange} required />
                <TextField name="cost" label="Custo" type="number" fullWidth margin="normal" value={service.cost} onChange={handleChange} required />
                <Button type="submit" variant="outlined" color="primary" sx={{ mt: 2 }}>
                    Adicionar Serviço
                </Button>
            </form>
        </Box>
    );
}

export default ServiceForm;
