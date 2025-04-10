import { useState } from 'react';
import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../services/api';

function PartForm({ maintenanceId, onAdd, parts, setParts }) {
    const [part, setPart] = useState({
        name: '',
        code: '',
        price: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPart((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/parts', {
                maintenance_id: maintenanceId,
                name: part.name,
                code: part.code,
                price: part.price,
                quantity: part.quantity
            });
            setPart({ name: '', code: '', price: '', quantity: '' }); // reset form
            onAdd();
        } catch (error) {
            alert('Erro ao adicionar peça: ' + error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/parts/${id}`);
            setParts((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
            alert('Erro ao excluir peça: ' + error.message);
        }
    };

    return (
        <Box>
            <Typography variant="h6" sx={{ mt: 4 }}>Peças</Typography>

            {parts.map((p) => (
                <Box
                    key={p.id}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 1, p: 1, border: '1px solid #ccc', borderRadius: 2 }}
                >
                    <Typography variant="body2">
                        {p.part_name} ({p.part_code}) - {p.quantity}x R$ {p.price}
                    </Typography>
                    <IconButton color="error" onClick={() => handleDelete(p.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}

            <form onSubmit={handleSubmit}>
                <TextField name="name" label="Nome da Peça" fullWidth margin="normal" value={part.name} onChange={handleChange} required />
                <TextField name="code" label="Código" fullWidth margin="normal" value={part.code} onChange={handleChange} required />
                <TextField name="price" label="Preço" fullWidth margin="normal" value={part.price} onChange={handleChange} required />
                <TextField name="quantity" label="Quantidade" fullWidth margin="normal" value={part.quantity} onChange={handleChange} required />
                <Button type="submit" variant="outlined" color="primary" sx={{ mt: 2 }}>
                    Adicionar Peça
                </Button>
            </form>
        </Box>
    );
}

export default PartForm;
