import './index.less'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { store } from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </ BrowserRouter>,
    document.getElementById("root")
)