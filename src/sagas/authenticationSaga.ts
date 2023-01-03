import {call, put} from 'redux-saga/effects';
import {AuthenticationAction, RegistrationAction} from "../redux/actions/authenticationActions";
import {TokenResult} from "../types";
import AuthenticationApi from "../api/authentication";
import { types } from '../redux/actions/types';

export function* logIn(action: AuthenticationAction) {
    try {
        yield put({type: types.BEGIN_API_CALL});
        yield call(AuthenticationApi.logIn, action.params);
        yield put({type: types.AUTHENTICATION_GET_TOKEN});
    } catch (e: any) {
        yield put({type: types.AUTHENTICATION_FAILURE, text: e.message});
    }
}

export function* getTokenResult() {
    try {
        const data: TokenResult = yield call(AuthenticationApi.getTokenResult);
        if(data.claims.role) {
            yield put({type: types.AUTHENTICATION_SUCCESS, data: data});
        } else {
            yield put({type: types.API_CALL_ERROR});
            yield put({type: types.AUTHENTICATION_ROLE_FAILURE, data: data});
        }
    } catch (e) {
        yield put({type: types.API_CALL_ERROR});
        yield put({type: types.AUTHENTICATION_FAILURE, error: e});
    }
}

export function* logOut() {
    try {
        yield put({type: types.BEGIN_API_CALL});
        yield call(AuthenticationApi.logOut);
        yield put({type: types.LOG_OUT_SUCCESS});
    } catch (e: any) {
        yield put({type: types.API_CALL_ERROR});
        yield put({type: types.LOG_OUT_FAILURE, message: e.message});
    }
}


export function* register(action: RegistrationAction)   {
    try {
        yield put({type: types.BEGIN_API_CALL});
        const { user } = yield call(AuthenticationApi.register, action.params);
        yield put({type: types.REGISTRATION_SUCCESS, params: {uid: user.uid}});
    } catch (e: any) {
        yield put({type: types.API_CALL_ERROR});
        yield put({type: types.REGISTRATION_FAILURE, text: e.message});
    }
}