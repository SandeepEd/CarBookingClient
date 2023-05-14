import { Card, CardMedia, Container, Typography, TextField, Grid } from '@mui/material';
import { useAddCheckoutItem, useGetCheckoutItems } from '../../services/CheckOut';

function CheckOut() {
    const { mutateAsync } = useAddCheckoutItem();
    const checkoutItems = useGetCheckoutItems().data;

    const handleQuantityChange = (carId: number) => {
        mutateAsync(carId);
    };

    return (
        <Container>
            {checkoutItems?.map((item) =>
                <Card
                    sx={{
                        m: 2,
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
                                src={item?.car?.imageSrc}
                            />
                        </Grid>
                        <Grid item xs={4}
                        >
                            <Typography
                                sx={{
                                    marginLeft: 2,
                                }}
                                variant='h4'>
                                {item?.car?.name}
                            </Typography>
                            <Typography
                                sx={{
                                    marginLeft: 2,
                                }}
                                variant='h6' color="text.secondary">
                                {item?.car?.price}$
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
                                value={item.quantity}
                                onChange={() => handleQuantityChange(item.carId)}
                            />
                        </Grid>
                    </Grid>
                </Card>
            )}

        </Container>
    )
}

export default CheckOut
