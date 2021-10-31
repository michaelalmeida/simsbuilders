import React from 'react';
import { screen } from '@testing-library/react';

import storeProviderTests from '../../utils/storeProviderTests';

import { Loading } from './Loading';

describe('<Loading />', () => {
    test('renders Loading when should load', () => {
        storeProviderTests(<Loading loading />);
        const loadingScreen = screen.getByTestId('loading-screen');

        expect(loadingScreen).toBeInTheDocument();
    });
});
