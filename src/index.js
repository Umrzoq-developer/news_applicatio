import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./redux/store";

//styling
import 'antd/dist/antd.css';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor} loading={null}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

