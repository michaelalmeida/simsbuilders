import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './sidebar/Sidebar';

import { Container, MainContent } from '../style/Container';

export const Dashboard = ({ component: Component }) => {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    return (
        <Container noFullScreen data-testid="dashboard">
            <Sidebar
                isClosed={isSidebarClosed}
                handleClose={setIsSidebarClosed}
                company={{ companyName: 'MILO' }}
            />
            <MainContent>
                <Component />
            </MainContent>
        </Container>
    );
};

Dashboard.propTypes = {
    component: PropTypes.func.isRequired,
};
