import React from 'react';
import { screen } from '@testing-library/react';

import storeProviderTests from '../../utils/storeProviderTests';

import { Login } from './Login';

describe('<Login />', () => {
    test('renders login screen and shows Welcome message', () => {
        storeProviderTests(<Login />);
        const linkElement = screen.getByRole('heading', { name: /welcome/i });

        expect(linkElement).toBeInTheDocument();
    });
});
