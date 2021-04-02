import React from 'react';
import { screen } from '@testing-library/react';

import storeProviderTests from '../../../utils/storeProviderTests';

import { Sidebar } from './Sidebar';

describe('<Sidebar />', () => {
    test('renders Sidebar', () => {
        storeProviderTests(<Sidebar company={{ companyName: 'CG-ADMIN' }} />);
        const sidebar = screen.getByTestId('sidebar');

        expect(sidebar).toBeTruthy();
    });
});
