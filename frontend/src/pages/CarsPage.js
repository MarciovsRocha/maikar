import { useEffect, useState } from 'react';
import api from '../services/api';

function CarsPage() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        api.get('/cars/my')
            .then(res => setCars(res.data))
            .catch(() => alert('Erro ao buscar carros'));
    }, []);

    return (
        <div>
            <h2>Meus Carros</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.brand} {car.model} ({car.year}) - {car.mileage} km
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarsPage;
