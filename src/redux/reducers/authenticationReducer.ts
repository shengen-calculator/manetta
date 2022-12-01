import initialState from './initialState';
import {types} from "../actions/types";

export default function authenticationReducer(state = initialState.authentication, action: any) {
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
                vip: action.data.claims.vip,
                logging: false
            };

        case types.AUTHENTICATION_FAILURE:
            return {
                ...state,
                role: '',
                vip: '',
                logging: false
            };

        case types.REGISTRATION_REQUEST:
            return {
                ...state,
                registrating: true
            };

        case types.REGISTRATION_SUCCESS:
            return {
                ...state,
                registrating: false
            };

        case types.REGISTRATION_FAILURE:
            return {
                ...state,
                registrating: false
            };

        case types.LOG_OUT_SUCCESS:
            return {
                ...state,
                role:'',
                vip:'',
            };

        default:
            return state;
    }
}