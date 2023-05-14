import { Card, CardMedia, Container, Typography, TextField, Grid } from '@mui/material';
import { useState } from 'react';

function CheckOut() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    };

    return (
        <Container>
            <Card
                sx={{
                    position: `relative`,
                    height: 100,
                    display: 'flex',
                    border: `1px solid black`,
                }}
            >
                <Grid container
                    sx={{
                        position: `relative`,
                        alignContent: `center`,
                        alignItems: `center`,
                    }}>
                    <Grid item xs={4}>
                        <CardMedia
                            component={'img'}
                            alt={`car name`}
                            sx={{
                                position: `relative`,
                                objectFit: `contain`,
                            }}
                            src={'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/11/Tesla-Roadster-103.jpg'}
                        />
                    </Grid>
                    <Grid item xs={4}
                    >
                        <Typography
                            sx={{
                                marginLeft: 2,
                            }}
                            variant='h4'>
                            Tesla
                        </Typography>
                        <Typography
                            sx={{
                                marginLeft: 2,
                            }}
                            variant='h6' color="text.secondary">
                            Price: $100000
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            sx={{
                                float: `right`,
                                mr: 2
                            }}
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default CheckOut
