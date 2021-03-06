import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from "./Root";
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import globalReducer from './store/reducersIndex';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(globalReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();