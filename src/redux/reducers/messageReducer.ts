import initialState from './initialState';
import {types} from "../actions/types";
import {MessageState} from "./types";

export default function messageReducer(state = initialState.message, action: any): MessageState {
    switch (action.type) {

        case types.REGISTRATION_SUCCESS:
            return {
                ...state,
                type: 'success',
                text: 'Registration success.'
            };

        case types.AUTHENTICATION_ROLE_FAILURE:
            return {
                ...state,
                type: 'error',
                text: 'Your account is not activated'
            };


        default:
            return state;
    }
}