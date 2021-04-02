import React from 'react';
import PropTypes from 'prop-types';

import { SidebarContainer, SidebarLogoContainer } from './Sidebar.style';

import { Logo } from '../logo/Logo';

export const Sidebar = ({ company }) => {
    const { companyName } = company;

    return (
        <SidebarContainer data-testid="sidebar">
            <SidebarLogoContainer>
                <Logo companyName={companyName} />
            </SidebarLogoContainer>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    company: PropTypes.shape({
        companyName: PropTypes.string,
    }).isRequired,
};
