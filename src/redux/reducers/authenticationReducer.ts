import initialState from './initialState';
import {types} from "../actions/types";
import {AuthenticationState} from "./types";

export default function authenticationReducer(state = initialState.authentication, action: any): AuthenticationState {
    switch (action.type) {

        case types.AUTHENTICATION_REQUEST:
            return {
                ...state,
                logging: true
            };

        case types.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                role: action.data.claims.role,
                logging: false
            };

        case types.AUTHENTICATION_FAILURE:
            return {
                ...state,
                role: "NOT_AUTHORIZED",
                logging: false
            };

        case types.REGISTRATION_REQUEST:
            return {
                ...state,
                registering: true
            };

        case types.REGISTRATION_SUCCESS:
            return {
                ...state,
                registering: false
            };

        case types.REGISTRATION_FAILURE:
            return {
                ...state,
                registering: false
            };

        case types.LOG_OUT_SUCCESS:
            return {
                ...state,
                role: "NOT_AUTHORIZED"
            };

        default:
            return state;
    }
}