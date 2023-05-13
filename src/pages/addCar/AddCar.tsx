import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import { AddCarProps } from '../../types/Car';
import { useAddNewCar } from '../../services/CarBooking';
import { useNotification } from '../../context/NotificationProvider';

export function AddCar() {

    const { register, handleSubmit } = useForm<AddCarProps>();
    const { mutateAsync } = useAddNewCar()
    const { createNotification } = useNotification();

    const onSubmit = async (data: AddCarProps) => {
        try {
            await mutateAsync(data)
            createNotification({
                message: 'Car Added Successfully',
                type: 'success'
            })
        } catch (e: any) {
            console.log(`error:::`, e)
            createNotification({
                message: e.response.data.message || e.message,
                type: 'error'
            })
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: `100%`,
            }}
        >
            <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 500 }}>
                <Typography component="h1" variant="h5">
                    Add New Car
                </Typography>
                <Box
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 1 }}
                    component={'form'}>
                    <TextField
                        sx={{
                            m: 1,
                        }}
                        label="Car Name"
                        fullWidth
                        type='text'
                        {...register("name", { required: true })}
                        placeholder="Enter Car Name"
                    />
                    <TextField
                        sx={{
                            m: 1,
                        }}
                        label="Car Price"
                        fullWidth
                        type='text'
                        {...register("price", { required: true })}
                        placeholder="Enter Car Price"
                    />
                    <TextField
                        sx={{
                            m: 1,
                        }}
                        label="Car Image URL"
                        fullWidth
                        type='text'
                        {...register("imageSrc", { required: true })}
                        placeholder="Enter Car Image Url"
                        helperText="Please provide a valid image URL."
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Car Details
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default AddCar