import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form";
import { AuthService } from "../../services/AuthService";
import { IUser } from "../../types/Auth";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<IUser>();

    const onSubmit = async (data: IUser) => {
        await AuthService.signUp(data)
        navigate('/login');
    };
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        {...register("name", { required: true })}
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        {...register("email", { required: true })}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        {...register("password", { required: true })}
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp