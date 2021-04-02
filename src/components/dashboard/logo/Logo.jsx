import React from 'react';
import PropTypes from 'prop-types';

import { LogoImg } from './Logo.style';
import { LogoText } from '../../style/Typography';

export const Logo = ({ companyName, companyURI }) => {
    return companyURI ? (
        <LogoImg>
            <img src={companyURI} alt="Company Name" />
        </LogoImg>
    ) : (
        <LogoText>{companyName}</LogoText>
    );
};

Logo.propTypes = {
    companyName: PropTypes.string.isRequired,
    companyURI: PropTypes.string,
};

Logo.defaultProps = {
    companyURI: '',
};
