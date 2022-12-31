import * as React from "react";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ApplicationState, AuthenticationState} from "../../redux/reducers/types";
import {RegistrationParams} from "../../types";
import {RegistrationAction, registrationRequest} from "../../redux/actions/authenticationActions";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {regEmail, regPassword} from "../../util/Regs";
import {connect} from "react-redux";
import TextInput from "../../component/TextInput";

type Error = {
    email?: string
    name?: string
    password?: string
    confirmation?: string
}
type Registration = {
    name: string
    email: string
    password: string
    confirmation: string
    requestInProcess: boolean
}
interface Props {
    auth: AuthenticationState
    registrationRequest: (params: RegistrationParams) => RegistrationAction | undefined
}

const RegistrationPage: React.FC<Props> = ({auth, registrationRequest}) => {
    const [registration, setRegistration] = useState<Registration>({
        name: '',
        email: '',
        password: '',
        confirmation: '',
        requestInProcess: false
    });
    const [errors, setErrors] = useState<Error>({});
    const navigate = useNavigate();


    useEffect(() => {
        if (auth.registering === true && registration.requestInProcess === false) {
            setRegistration(prev => ({
                ...prev,
                requestInProcess: true
            }));
        }

        if (auth.registering === false && registration.requestInProcess === true) {
            setRegistration(prev => ({
                ...prev,
                requestInProcess: false
            }));
            navigate('/login');
        }

    }, [auth.registering, navigate, registration]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegistration(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formIsValid()) return;
        const { name, email, password } = registration;
        registrationRequest({name: name, email: email, password: password});
    };

    const formIsValid = () => {
        const {name, email, password, confirmation } = registration;
        const errors: Error = {};

        if (!email) {
            errors.email = "Required field";
        } else if (!regEmail.test(String(email).toLowerCase())) {
            errors.email = "Email address is not correct";
        }

        if (!password) {
            errors.password = "Required field";
        } else if (password.length < 8) {
            errors.password = "Password must contain more than 8 characters";

        } else if (!regPassword.test(String(password).toLowerCase())) {
            errors.password = "Password must contain number, letter and special character";
        }

        if (!confirmation) {
            errors.confirmation = "Required field";
        }

        if(!errors.password && password !== confirmation) {
            errors.confirmation = "Password and confirmation do not match";
            setRegistration(prev => ({
                ...prev,
                password: '',
                confirmation: ''
            }));
        }

        if (!name) {
            errors.name = "Required field";
        }

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    };

    return (
        <Paper sx={{maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Typography color="textPrimary">
                                For registration please fill out the form below
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <form onSubmit={handleRegistration}>
                <Grid container spacing={2} alignItems="center" direction="column" columnSpacing={3}>
                    <Grid item xs={3} sx={{margin: "25px"}}>
                        <TextInput
                            label="Name"
                            name="name"
                            sx={{fontSize: 22}}
                            onChange={handleChange}
                            value={registration.name}
                            errorMessage={errors.name}
                            variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <TextInput
                            name="email"
                            label="Email"
                            sx={{fontSize: 22}}
                            onChange={handleChange}
                            value={registration.email}
                            errorMessage={errors.email}
                            variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <TextInput
                            name="password"
                            label="Password"
                            type="password"
                            sx={{fontSize: 22}}
                            onChange={handleChange}
                            value={registration.password}
                            errorMessage={errors.password}
                            variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <TextInput
                            name="confirmation"
                            label="Repeat Password"
                            type="password"
                            sx={{"fontSize": 22}}
                            onChange={handleChange}
                            value={registration.confirmation}
                            errorMessage={errors.confirmation}
                            variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={registration.requestInProcess}
                            sx={{width: 230}}>
                            {registration.requestInProcess ? "Registering..." : "Register"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        auth: state.authentication
    }
};

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = {
    registrationRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationPage);