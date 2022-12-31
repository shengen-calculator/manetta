import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import configureStore from './redux/configureStore';
import initialState from "./redux/reducers/initialState";
import ToastrMessage from "./component/ToastrMessage";
import {SnackbarProvider} from "notistack";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
const {store, persistent} = configureStore(initialState);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistent}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <CssBaseline/>
                    <App/>
                    <ToastrMessage/>
                </SnackbarProvider>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
);
