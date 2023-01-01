import {types} from "../actions/types";
import initialState from "./initialState";

const actionTypeEndsInSuccess = (type: string): boolean => {
    return type.substring(type.length - 8) === "_SUCCESS";
};

const apiCallStatusReducer = (
    state = initialState.apiCallsInProgress,
    action: any
) => {
    if (action.type === types.BEGIN_API_CALL) {
        return state + 1;
    } else if (
        action.type === types.API_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)
    ) {
        return state - 1;
    }

    return state;
};

export default apiCallStatusReducer;