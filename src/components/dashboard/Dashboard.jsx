import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './sidebar/Sidebar';

import { Container, MainContent } from '../style/Container';

export const Dashboard = ({ children }) => {
    return (
        <Container noFullScreen data-testid="dashboard">
            <Sidebar company={{ companyName: 'MILO' }} />
            <MainContent>{children}</MainContent>
        </Container>
    );
};

Dashboard.propTypes = {
    children: PropTypes.node.isRequired,
};
