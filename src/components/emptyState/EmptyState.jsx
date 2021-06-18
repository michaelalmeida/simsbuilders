import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Content, CatIllustration } from './EmptyState.style';
import { H1 } from '../style/Typography';

const EmptyState = ({ messageId }) => (
    <Content>
        <H1>OPS!!</H1>
        <CatIllustration />
        <p>
            <FormattedMessage id={`warning.${messageId}`} />
        </p>
    </Content>
);

EmptyState.propTypes = {
    messageId: PropTypes.string.isRequired,
};

export { EmptyState };
