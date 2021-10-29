import React from 'react';
import { screen } from '@testing-library/react';

import storeProviderTests from '../../../utils/storeProviderTests';

import { Header } from './Header';

describe('<Header />', () => {
    test('renders Dashboard', () => {
        storeProviderTests(<Header />);
        const dashboard = screen.getByRole('heading', {
            name: /simsbuilders/i,
        });

        expect(dashboard).toBeTruthy();
    });
});
