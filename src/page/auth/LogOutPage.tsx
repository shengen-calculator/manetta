import * as React from "react";
import Paper from "@mui/material/Paper";
import {ApplicationState} from "../../redux/reducers/types";
import {useEffect} from "react";
import {connect} from "react-redux";
import {LogoutAction, logoutRequest} from "../../redux/actions/authenticationActions";
import { useNavigate } from "react-router-dom";

interface Props {
    logoutRequest: () => LogoutAction | undefined
}

const LogOutPage: React.FC<Props> = ({logoutRequest}) => {

    const navigate = useNavigate();
    useEffect(() => {
        logoutRequest();
        navigate("/login");
    }, [logoutRequest, navigate]);

    return (
        <Paper sx={{maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
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
    logoutRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogOutPage);