import React from 'react';

import renderWithLocale from '../../../utils/renderWithLocate';
import { Logo } from './Logo';

describe('<Logo />', () => {
    test('renders logo', () => {
        const companyName = 'cg-admin';
        const { getByRole } = renderWithLocale(<Logo companyName={companyName} />);
        const logoElement = getByRole('heading', { name: /cg-admin/i });

        expect(logoElement).toBeInTheDocument();
    });
    test('renders logo with the company name', () => {
        const companyName = 'My company';
        const { getByRole } = renderWithLocale(<Logo companyName={companyName} />);
        const logoElement = getByRole('heading', { name: /My company/i });

        expect(logoElement).toHaveTextContent(companyName);
    });
    test('renders logo with the company name', () => {
        const logoURI = 'fakeuri';
        const { getByRole } = renderWithLocale(<Logo companyName="" companyURI={logoURI} />);
        const logoElement = getByRole('img', { name: /company name/i });

        expect(logoElement).toBeInTheDocument(logoElement);
    });
});
