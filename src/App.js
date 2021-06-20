import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { IntlProvider } from 'react-intl';

import { messages } from './lang';

import { GlobalStyles } from './components/style/global';

import Routes from './routes';

import 'antd/dist/antd.css';

import { userCookie } from './utils/cookieHandler';
import { setUserAuth, setUserInfo } from './store/user';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (typeof userCookie.userName !== 'undefined') {
            dispatch(setUserAuth(true));
            dispatch(
                setUserInfo({
                    name: userCookie.name,
                    id: userCookie.userId,
                    username: userCookie.userName,
                })
            );
        }
    }, [0]);

    return (
        <>
            <GlobalStyles />
            <IntlProvider locale="pt" messages={messages.pt}>
                <Routes />
            </IntlProvider>
        </>
    );
}

export default App;
