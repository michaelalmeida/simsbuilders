import React from 'react';

import { Sidebar } from './sidebar/Sidebar';

import { Container } from '../style/Container';

export const Dashboard = () => {
    return (
        <Container data-testid="dashboard">
            <Sidebar company={{ companyName: 'CG-ADMIN' }} />
        </Container>
    );
};
