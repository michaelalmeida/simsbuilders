import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { CloseFooter } from './Sidebar.style';

const SidebarFooter = ({ isClosed, handleClose }) => (
    <CloseFooter onClick={() => handleClose(!isClosed)}>
        {isClosed ? (
            <FontAwesomeIcon icon={faChevronLeft} />
        ) : (
            <FontAwesomeIcon icon={faChevronRight} />
        )}
    </CloseFooter>
);

SidebarFooter.propTypes = {
    isClosed: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export { SidebarFooter };
