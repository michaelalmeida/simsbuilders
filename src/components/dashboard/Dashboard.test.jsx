import React from 'react';
import { screen } from '@testing-library/react';

import storeProviderTests from '../../utils/storeProviderTests';

import { Dashboard } from './Dashboard';

describe('<Dashboard />', () => {
    test('renders Dashboard', () => {
        storeProviderTests(<Dashboard />);
        const dashboard = screen.getByTestId('dashboard');

        expect(dashboard).toBeTruthy();
    });
});
