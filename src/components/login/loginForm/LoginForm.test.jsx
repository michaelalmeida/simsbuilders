import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import storeProviderTests from '../../../utils/storeProviderTests';

import { LoginForm } from './LoginForm';

describe('<LoginForm />', () => {
    test('renders login form screen', () => {
        storeProviderTests(<LoginForm />);
        const textBox = screen.getByRole('textbox');

        expect(textBox).toBeTruthy();
    });
    test('should input user and input password be empty when started', () => {
        storeProviderTests(<LoginForm />);
        const usernameInput = screen.getByPlaceholderText('User');
        const passwordInput = screen.getByPlaceholderText('Password');

        expect(usernameInput.value).toBe('');
        expect(passwordInput.value).toBe('');
    });
    test('should change user value when the user changes it', () => {
        storeProviderTests(<LoginForm />);
        const usernameInput = screen.getByPlaceholderText('User');

        fireEvent.input(usernameInput, { target: { value: 'Michael' } });
        expect(usernameInput.value).toBe('Michael');
    });
    test('should change password value when the user changes it', () => {
        storeProviderTests(<LoginForm />);
        const usernameInput = screen.getByPlaceholderText('Password');

        fireEvent.input(usernameInput, { target: { value: 'password' } });
        expect(usernameInput.value).toBe('password');
    });
});
