import React from 'react';

import { IntlProvider } from 'react-intl';

import { messages } from './lang';

import { GlobalStyles } from './components/style/global';

import Routes from './routes';

import 'antd/dist/antd.css';

function App() {
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
