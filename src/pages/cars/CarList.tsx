import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useGetCarsList } from './hooks'
import { useAddCheckoutItem } from '../../services/CheckOut'
import { useNotification } from '../../context/NotificationProvider';

function CarList() {

    const { data: carsList, isLoading } = useGetCarsList()
    const { mutateAsync } = useAddCheckoutItem();
    const { createNotification } = useNotification();

    const onAddToCart = async (carId: number) => {
        try {
            await mutateAsync(carId)
            createNotification({
                message: 'Car Added Successfully',
                type: 'success'
            })
        } catch (e: any) {
            createNotification({
                message: e.response.data.message || e.message,
                type: 'error'
            })
        }
    }
    return (
        <div style={{ display: `flex`, width: `100%`, flexWrap: `wrap` }}>
            {isLoading && <h3>Loading...</h3>}
            {carsList?.map(car =>
                <Card key={car.id} sx={{ maxWidth: 345, minWidth: 300, margin: 2 }}>
                    <CardMedia
                        component="img"
                        alt={car.name}
                        height="110"
                        src={car.imageSrc}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {car.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {car.price} $
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Details</Button>
                        <Button onClick={() => onAddToCart(car.id)} size="small">Book</Button>
                    </CardActions>
                </Card>
            )}
        </div>
    )
}

export default CarList