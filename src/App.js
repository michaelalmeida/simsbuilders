import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { messages } from './lang';

import { GlobalStyles } from './components/style/global';

import { Login } from './components/login/Login';
import { Dashboard } from './components/dashboard/Dashboard';

import 'antd/dist/antd.css';

function App() {
    const isAuth = useSelector(({ user }) => user.isAuth);
    return (
        <>
            <GlobalStyles />
            <Router>
                <Switch>
                    <IntlProvider locale="en" messages={messages.en}>
                        <Route exact path="/login/" component={Login} />
                        <Route exact path="/">
                            {isAuth ? <Dashboard /> : <Redirect to="/login/" />}
                        </Route>
                    </IntlProvider>
                </Switch>
            </Router>
        </>
    );
}

export default App;
