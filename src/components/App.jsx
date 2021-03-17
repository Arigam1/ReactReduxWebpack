import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import "./app.less"
import Card from './card/Card';
import Main from './main/Main';

const App = () => {

    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/card/:username/:reponame" component={Card} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;