import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Login } from '../components/login/Login';
import { Layout } from '../components/layout';
import { Home } from '../components/home/Home';
import { Signup } from '../components/signup/Signup';
import { Signout } from '../components/signout/Signout';
import { CreateContract } from '../components/contract/CreateContract';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/login/" component={Login} />
            <Route exact path="/signup/" component={Signup} />
            <Route exact path="/signout/" component={Signout} />
            <Route exact path="/">
                <Layout component={() => <Home />} />
            </Route>
            <PrivateRoute path="/create-contract">
                <Layout component={() => <CreateContract />} />
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
