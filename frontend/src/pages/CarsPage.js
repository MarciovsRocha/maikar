import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './CarsPage.css';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

function CarsPage() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const FetchCarData = async () => {
            try {
                const response = await api.get('/cars/');
                setCars(response.data);
            } catch (error) {
                alert('Erro ao buscar carros: ' + error.message);
            }
        };

        FetchCarData();
    }, []);

    const handleEdit = (id) => {
        navigate(`/cars/${id}/edit`);
    };

    const handleMaintenance = (id) => {
        alert('Operação não implementada');
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja apagar este carro?')) {
            try {
                await api.delete(`/cars/${id}`);
                setCars((prev) => prev.filter(car => car.id !== id));
            } catch (error) {
                alert('Erro ao apagar carro: ' + error.message);
            }
        }
    };

    const handleAddCar = () => {
        navigate('/cars/new');
    };

    return (
        <div className="cars-container">
            <div className="cars-header">
                <h2>Meus Carros</h2>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddCar}
                >
                    Adicionar Carro
                </Button>
            </div>

            <ul className="car-list">
                {cars.map(car => (
                    <li key={car.id}>
                        <div className="car-item">
                            <span className="car-info">
                                {car.brand} {car.model} ({car.year}) - {car.km_current ?? 0} km
                            </span>
                            <div className="car-actions">
                                <IconButton color="primary" onClick={() => handleEdit(car.id)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="info" onClick={() => handleMaintenance(car.id)}>
                                    <BuildIcon />
                                </IconButton>
                                <IconButton color="error" onClick={() => handleDelete(car.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarsPage;
