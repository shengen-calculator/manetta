import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import authentication from './authenticationReducer';
import message from './messageReducer';
import {persistReducer} from "redux-persist";

export const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['message',
        'authentication',
        'client',
        'apiCallsInProgress',
        'appState',
        'statistic',
        'product'
    ]
};

const authPersistConfig = {
    key: 'authentication',
    storage: storage,
    blacklist: ['logging', 'outing']
};

const rootReducer = combineReducers({
    authentication: persistReducer(authPersistConfig, authentication),
    message
});

export default rootReducer;