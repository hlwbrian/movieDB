import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';

export const history = createHistory();

const AppRouter = (props) => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;