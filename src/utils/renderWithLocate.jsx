import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

import { IntlProvider } from 'react-intl';

import { messages } from '../lang/index';

function renderWithLocale(children) {
    const language = 'en';
    return render(
        <IntlProvider locale={language} messages={messages[language]}>
            {children}
        </IntlProvider>
    );
}

renderWithLocale.propTypes = {
    children: PropTypes.element.isRequired,
};

export default renderWithLocale;
