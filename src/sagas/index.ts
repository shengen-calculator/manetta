import {takeLatest} from 'redux-saga/effects';
import {logIn, logOut, register } from './authenticationSaga';
import {types} from "../redux/actions/types";

function* mySaga() {
    yield takeLatest(types.LOG_OUT_REQUEST, logOut);
    yield takeLatest(types.AUTHENTICATION_REQUEST, logIn);
    yield takeLatest(types.REGISTRATION_REQUEST, register);
}
export default mySaga;