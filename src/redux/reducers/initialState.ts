import {ApplicationState} from "./types";

const initialState: ApplicationState = {
    authentication: {
        role: "",
        name: "",
        logging: false,
        registering: false
    },
    message: {
        type: "INFO",
        text: ""
    }
};

export default initialState;