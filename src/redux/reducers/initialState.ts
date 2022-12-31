import {ApplicationState} from "./types";

const initialState: ApplicationState = {
    authentication: {
        role: "NOT_AUTHORIZED",
        name: "",
        logging: false,
        registering: false
    },
    message: {
        type: "info",
        text: ""
    },
    apiCallsInProgress: 0
};

export default initialState;