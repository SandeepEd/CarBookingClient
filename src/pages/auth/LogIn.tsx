import { Box, Button, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

function LogIn() {
    const { logIn } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data: any) => {
        logIn(data)
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