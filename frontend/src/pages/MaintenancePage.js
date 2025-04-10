import { useEffect, useState } from 'react';
import api from '../services/api';
import './MaintenancePage.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

import {
    IconButton,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';

function MaintenancePage() {
    const [maintenances, setMaintenances] = useState([]);
    const [cars, setCars] = useState({});
    const [openDetails, setOpenDetails] = useState(false);
    const [selectedMaintenance, setSelectedMaintenance] = useState(null);
    const [parts, setParts] = useState([]);
    const [services, setServices] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await api.get('/maintenance/');
                setMaintenances(data);

                const uniqueCarIds = [...new Set(data.map(m => m.car_id))];
                const carPromises = uniqueCarIds.map(async (id) => {
                    const res = await api.get(`/cars/${id}`);
                    return [id, res.data];
                });

                const carEntries = await Promise.all(carPromises);
                const carMap = Object.fromEntries(carEntries);
                setCars(carMap);
            } catch (error) {
                alert('Erro ao carregar manutenções: ' + error.message);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (id) => {
        navigate(`/maintenances/edit/${id}`);
    };

    const handleDetails = async (maintenance) => {
        try {
            const [partsRes, servicesRes] = await Promise.all([
                api.get(`/parts/${maintenance.id}`),
                api.get(`/services/${maintenance.id}`)
            ]);
            setParts(partsRes.data);
            setServices(servicesRes.data);
            setSelectedMaintenance(maintenance);
            setOpenDetails(true);
        } catch (error) {
            alert('Erro ao buscar detalhes da manutenção: ' + error.message);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta manutenção?')) {
            try {
                await api.delete(`/maintenances/${id}`);
                setMaintenances(prev => prev.filter(m => m.id !== id));
            } catch (error) {
                alert('Erro ao excluir manutenção: ' + error.message);
            }
        }
    };

    return (
        <div className="maintenance-container">
            <div className="maintenance-header">
                <h2>Minhas Manutenções</h2>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/maintenances/create')}
                    style={{ marginBottom: '20px' }}
                >
                    Nova Manutenção
                </Button>
            </div>
            <ul className="maintenance-list">
                {maintenances.map(m => {
                    const car = cars[m.car_id];
                    return (
                        <li key={m.id}>
                            <div className="card">
                                <div className="card-content">
                                    <div>
                                        📅 <strong>{format(new Date(m.date), 'dd/MM/yyyy')}</strong> — {m.notes}
                                        <br />
                                        🔁 Próxima revisão: {format(new Date(m.next_revision), 'dd/MM/yyyy')}
                                        <br />
                                        🚗 {car ? `${car.brand} ${car.model}` : `Carro #${m.car_id}`}
                                    </div>
                                    <div className="card-buttons">
                                        <IconButton color="primary" onClick={() => navigate(`/maintenances/${m.id}/edit`)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton color="info" onClick={() => handleDetails(m)}>
                                            <ListIcon />
                                        </IconButton>
                                        <IconButton color="error" onClick={() => handleDelete(m.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {/* Dialog de Detalhes */}
            <Dialog
                open={openDetails}
                onClose={() => setOpenDetails(false)}
                fullScreen
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Detalhes da Manutenção
                    <IconButton onClick={() => setOpenDetails(false)}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <Typography variant="h6">🧩 Peças Utilizadas</Typography>
                    <List>
                        {parts.length > 0 ? parts.map((p, i) => (
                            <ListItem key={i}>
                                <ListItemText
                                    primary={`${p.part_name} (${p.part_code})`}
                                    secondary={`Qtd: ${p.quantity} — Preço unitário: R$ ${parseFloat(p.price).toFixed(2)}`}
                                />
                            </ListItem>
                        )) : (
                            <Typography variant="body2" sx={{ ml: 2 }}>Nenhuma peça registrada.</Typography>
                        )}
                    </List>

                    <Typography variant="h6" sx={{ mt: 3 }}>🛠️ Serviços Realizados</Typography>
                    <List>
                        {services.length > 0 ? services.map((s, i) => (
                            <ListItem key={i}>
                                <ListItemText
                                    primary={s.service_description}
                                    secondary={`Custo: R$ ${parseFloat(s.cost).toFixed(2)}`}
                                />
                            </ListItem>
                        )) : (
                            <Typography variant="body2" sx={{ ml: 2 }}>Nenhum serviço registrado.</Typography>
                        )}
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default MaintenancePage;
