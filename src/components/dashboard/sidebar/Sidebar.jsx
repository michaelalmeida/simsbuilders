import React from 'react';
import PropTypes from 'prop-types';

import { SidebarContainer, Header, Content, Footer } from './Sidebar.style';

import { Logo } from '../logo/Logo';
import { Menu } from './menu/Menu';
import { SidebarFooter } from './SidebarFooter';

export const Sidebar = ({ isClosed, handleClose, company }) => {
    const { companyName } = company;

    return (
        <SidebarContainer isClosed={isClosed} data-testid="sidebar">
            <Header>{!isClosed && <Logo companyName={companyName} />}</Header>
            <Content>
                <Menu isClosed={isClosed} />
            </Content>
            <Footer>
                <SidebarFooter isClosed={isClosed} handleClose={handleClose} isSidebarOpen />
            </Footer>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    company: PropTypes.shape({
        companyName: PropTypes.string,
    }).isRequired,
    isClosed: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};
