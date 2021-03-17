import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { setCount } from '../reducers/reposReducer';
import "./app.less"
import Main from './main/Main';

const App = () => {
    const dispatch = useDispatch()



    return (
        <div className="container">
            <Route path="/" component={Main} />
        </div>
    );
};

export default App;