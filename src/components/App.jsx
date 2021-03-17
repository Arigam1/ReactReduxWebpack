import React from 'react';
import { Route } from 'react-router';
import "./app.less"
import Main from './main/Main';

const App = () => {

    return (
        <div className="container">
            <Route path="/" component={Main} />
        </div>
    );
};

export default App;