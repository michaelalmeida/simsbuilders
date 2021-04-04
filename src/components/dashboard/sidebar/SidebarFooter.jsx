import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { CloseFooter } from './Sidebar.style';

const SidebarFooter = ({ isSidebarOpen }) => (
    <CloseFooter>
        {isSidebarOpen ? (
            <FontAwesomeIcon icon={faChevronLeft} />
        ) : (
            <FontAwesomeIcon icon={faChevronRight} />
        )}
    </CloseFooter>
);

SidebarFooter.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired,
};

export { SidebarFooter };
