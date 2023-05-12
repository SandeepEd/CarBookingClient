import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const navigateToCars = () => {
        navigate('/cars');
    }

    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Welcome to Our Car Buying Website!
            </Typography>
            <Typography variant="h6" align="center">
                We offer a wide range of cars for all budgets and preferences.
            </Typography>
            <Box display="flex" justifyContent="center" marginTop={2}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={navigateToCars}
                    style={{ marginTop: '20px' }}
                >
                    View Available Cars
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
