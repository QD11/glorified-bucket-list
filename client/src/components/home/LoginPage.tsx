import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    createTheme,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { logIn, loginUser } from "features/users/userSlice";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginInfo((loginInfo) => ({
            ...loginInfo,
            [event.target.name]: event.target.value,
        }));
    };

    const navigateSignup = useCallback(() => {
        navigate("/signup");
    }, [navigate]);

    const handleSubmit = (event: FormEvent<HTMLFormElement | undefined>) => {
        event.preventDefault();
        if (Object.values(loginInfo).every((item) => item)) {
            const login = async () => {
                let user;

                try {
                    user = await loginUser(loginInfo);
                } catch (error) {
                    console.log(error);
                    return;
                }

                if (user) {
                    dispatch(
                        logIn({
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            loggedIn: true,
                        })
                    );
                }
            };
            login();
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={navigateSignup}
                                >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};
