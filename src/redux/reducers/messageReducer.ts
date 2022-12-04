import initialState from './initialState';
import {types} from "../actions/types";
import {MessageState} from "./types";

export default function messageReducer(state = initialState.message, action: any): MessageState {
    switch (action.type) {

        case types.REGISTRATION_SUCCESS:
            return {
                ...state,
                type: 'SUCCESS',
                text: 'Вітаємо. Реєстрація успішна.'
            };

        case types.REGISTRATION_FAILURE:
            return {
                ...state,
                type: 'ERROR',
                text: action.text
            };

        case types.AUTHENTICATION_FAILURE:
            return {
                ...state,
                type: 'ERROR',
                text: action.text
            };

        case types.AUTHENTICATION_ROLE_FAILURE:
            return {
                ...state,
                type: 'ERROR',
                text: 'Ваш обліковий запис не активовано'
            };


        default:
            return state;
    }
}