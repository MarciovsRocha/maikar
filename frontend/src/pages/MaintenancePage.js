import { useEffect, useState } from 'react';
import api from '../services/api';
import './MaintenancePage.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BuildIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function MaintenancePage() {
    const [maintenances, setMaintenances] = useState([]);
    const [cars, setCars] = useState({}); // car_id => car
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
        console.log('Editar manutenção', id);
    };

    const handleDetails = (id) => {
        console.log('Ver detalhes da manutenção', id);
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
        <div>
            <h2>Minhas Manutenções</h2>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/maintenances/create')}
                style={{ marginBottom: '20px' }}
            >
                Nova Manutenção
            </Button>
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
                                        <IconButton onClick={() => handleEdit(m.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDetails(m.id)}>
                                            <BuildIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(m.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MaintenancePage;
