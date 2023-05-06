import { Box, Button, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form";

function LogIn() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Log In
            </Typography>
            <Box
                component={'form'}
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    mt: 1,
                }}
            >
                <TextField
                    sx={{
                        m: 1,
                    }}
                    {...register("email", { required: true })}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                />
                <TextField
                    sx={{
                        m: 1,
                    }}
                    {...register("password", { required: true })}
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Log In
                </Button>
            </Box>
        </Box>
    )
}

export default LogIn