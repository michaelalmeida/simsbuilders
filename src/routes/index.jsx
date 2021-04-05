import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Login } from '../components/login/Login';
import { Dashboard } from '../components/dashboard/Dashboard';
import { Home } from '../components/dashboard/home';
import { Signup } from '../components/signup/Signup';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/login/" component={Login} />
            <Route exact path="/signup/" component={Signup} />
            <PrivateRoute path="/">
                <Dashboard component={() => <Home />} />
            </PrivateRoute>
            <PrivateRoute path="/orders">
                <Dashboard component={() => <Home />} />
            </PrivateRoute>
            <PrivateRoute path="/clients">
                <Dashboard component={() => <Home />} />
            </PrivateRoute>
            <PrivateRoute path="/orders">
                <Dashboard component={() => <Home />} />
            </PrivateRoute>
            <PrivateRoute path="/configuration">
                <Dashboard component={() => <Home />} />
            </PrivateRoute>
        </Switch>
    </Router>
);

function PrivateRoute({ children, path }) {
    const isAuth = useSelector(({ user }) => user.isAuth);
    return (
        <Route
            path={path}
            render={({ location }) =>
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
};

export default Routes;
