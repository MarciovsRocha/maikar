import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h4" gutterBottom>
                Bem-vindo ao sistema
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6">Gerenciar Manutenções</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Visualize e edite todas as manutenções dos carros cadastrados.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                onClick={() => navigate('/maintenances')}
                            >
                                Ir para Manutenções
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h6">Gerenciar Carros</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Visualize e gerencie os carros registrados no sistema.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                onClick={() => navigate('/cars')}
                            >
                                Ir para Carros
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;
