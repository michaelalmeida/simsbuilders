import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { messages } from '../lang/index';

import store from '../store';

function storeProviderTests(children) {
    return render(
        <Provider store={store}>
            <Router>
                <IntlProvider locale="en" messages={messages.en}>
                    {children}
                </IntlProvider>
            </Router>
        </Provider>
    );
}

storeProviderTests.propTypes = {
    children: PropTypes.element.isRequired,
};

export default storeProviderTests;
