import {ApplicationState} from "./types";

const initialState: ApplicationState = {
    authentication: {
        role: "",
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