import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useGetCarsList } from './hooks'

function CarList() {

    const { data: carsList, isLoading } = useGetCarsList()
    return (
        <div style={{ display: `flex`, width: `100%` }}>
            {isLoading && <h3>Loading...</h3>}
            {carsList?.map(car =>
                <Card key={car.id} sx={{ maxWidth: 345, minWidth: 300, margin: 2, flexWrap: `wrap` }}>
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
                            {car.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Details</Button>
                        <Button size="small">Book</Button>
                    </CardActions>
                </Card>
            )}
        </div>
    )
}

export default CarList