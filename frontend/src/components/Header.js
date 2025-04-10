// src/components/Header.js
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Marcio Vinicius de Souza da Rocha
                </Typography>
                <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                <Button color="inherit" onClick={() => navigate('/cars')}>Carros</Button>
                <Button color="inherit" onClick={() => navigate('/maintenances')}>Manutenções</Button>
                <Button color="inherit" onClick={handleLogout}>Sair</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
