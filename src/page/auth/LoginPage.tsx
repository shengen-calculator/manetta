import * as React from "react";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ApplicationState, AuthenticationState} from "../../redux/reducers/types";
import {useState, useEffect} from "react";
import {connect} from "react-redux";
import {AuthenticationAction, authenticationRequest} from "../../redux/actions/authenticationActions";
import TextInput from "../../component/TextInput";
import {regEmail} from "../../util/Regs";
import { useNavigate } from "react-router-dom";
import { AuthenticationParams } from "../../types";

type Error = {
    email?: string
    password?: string
}
type Authentication = {
    email: string
    password: string
    requestInProcess: boolean
}
interface Props {
    auth: AuthenticationState
    authenticationRequest: (params: AuthenticationParams) => AuthenticationAction | undefined
}

const LoginPage: React.FC<Props> = ({auth, authenticationRequest}) => {
    const [authentication, setAuthentication] = useState<Authentication>({
        email: '',
        password: '',
        requestInProcess: false
    });
    const [errors, setErrors] = useState<Error>({});
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAuthentication(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAuthentication = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formIsValid()) return;
        const { email, password } = authentication;
        authenticationRequest({email: email, password: password});
    };

    useEffect(() => {
        if(auth.logging && !authentication.requestInProcess) {
            setAuthentication(prev => ({
                ...prev,
                requestInProcess: true
            }));
        }

        if(!auth.logging && authentication.requestInProcess) {
            setAuthentication(prev => ({
                ...prev,
                requestInProcess: false
            }));
            navigate('/');
        }
    }, [auth.logging, navigate, authentication]);

    const formIsValid = () => {
        const { email, password } = authentication;
        const errors: Error = {};

        if (!email) {
            errors.email = "Required field";
        } else if (!regEmail.test(String(email).toLowerCase())) {
            errors.email = "Email address is not correct";
        }

        if (!password) {
            errors.password = "Required field";
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
                                Please enter your credential in form bellow
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <form onSubmit={handleAuthentication}>
                <Grid container spacing={2} alignItems="center" direction="column" columnSpacing={3}>
                    <Grid item xs={3} sx={{margin: "25px"}}>
                        <TextInput
                            label="Login"
                            name="email"
                            errorMessage={errors.email}
                            onChange={handleChange}
                            value={authentication.email}/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <TextInput
                            label="Password"
                            name="password"
                            errorMessage={errors.password}
                            onChange={handleChange}
                            value={authentication.password}
                            type="password"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{width: 160}}
                            color="primary"
                            disabled={authentication.requestInProcess}
                        >
                            {authentication.requestInProcess ? "Logging..." : "Login"}
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
    authenticationRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);