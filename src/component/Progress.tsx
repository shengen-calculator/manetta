import React from 'react';
import LinearProgress from "@mui/material/LinearProgress";
import {ApplicationState} from "../redux/reducers/types";
import {connect} from "react-redux";


type ProgressProps = {
    inProgress: number;
};

const Progress: React.FC<ProgressProps> = ({inProgress}) => {
    const isShown = inProgress > 0;
    return (
        <React.Fragment>
            {isShown && <LinearProgress/>}
        </React.Fragment>
    );
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        inProgress: state.apiCallsInProgress
    }
};

export default connect(
    mapStateToProps
)(Progress);
