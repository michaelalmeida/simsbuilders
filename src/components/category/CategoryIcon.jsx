import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faBath,
    faUtensils,
    faBed,
    faCouch,
    faBook,
    faTree,
    faBaby,
    faSink,
} from '@fortawesome/free-solid-svg-icons';

const iconType = (type) => {
    switch (type) {
        case 'bathroom':
            return faBath;
        case 'kitchen':
            return faUtensils;
        case 'bedroom':
            return faBed;
        case 'livingroom':
            return faCouch;
        case 'diningroom':
            return faSink;
        case 'study':
            return faBook;
        case 'outdoor':
            return faTree;
        case 'kidsroom':
            return faBaby;
        default:
            return '';
    }
};

const CategoryIcon = ({ type, color, size }) => {
    return <FontAwesomeIcon icon={iconType(type)} size={size} color={color} />;
};

CategoryIcon.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
};

CategoryIcon.defaultProps = {
    color: 'white',
    size: 'lg',
};

export { CategoryIcon };
