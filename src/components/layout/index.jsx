import React from 'react';
import PropTypes from 'prop-types';

import { Container, MainContent } from '../style/Container';
import { Header } from './header/Header';

export const Layout = ({ component: Component }) => {
    return (
        <Container data-testid="layout">
            <Header />
            <MainContent>
                <Component />
            </MainContent>
        </Container>
    );
};

Layout.propTypes = {
    component: PropTypes.func.isRequired,
};
