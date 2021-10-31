import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import { LoaddingScreen } from './Loading.style';

const Loading = ({ loading }) =>
    loading && (
        <LoaddingScreen data-testid="loading-screen">
            <Spin size="large" />
        </LoaddingScreen>
    );

Loading.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export { Loading };
