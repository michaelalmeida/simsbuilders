import React from 'react';
import PropTypes from 'prop-types';

import { SidebarContainer, Header, Content, Footer } from './Sidebar.style';

import { Logo } from '../logo/Logo';
import { Menu } from './menu/Menu';
import { SidebarFooter } from './SidebarFooter';

export const Sidebar = ({ company }) => {
    const { companyName } = company;

    return (
        <SidebarContainer data-testid="sidebar">
            <Header>
                <Logo companyName={companyName} />
            </Header>
            <Content>
                <Menu />
            </Content>
            <Footer>
                <SidebarFooter isSidebarOpen />
            </Footer>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    company: PropTypes.shape({
        companyName: PropTypes.string,
    }).isRequired,
};
