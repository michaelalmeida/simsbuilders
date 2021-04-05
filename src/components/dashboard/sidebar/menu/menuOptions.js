import React from 'react';
import { FormattedMessage } from 'react-intl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faShoppingBasket, faTools } from '@fortawesome/free-solid-svg-icons';
import permissions from '../../../../utils/permissions';

const menuOptions = [
    {
        id: 1,
        label: <FormattedMessage id="home" />,
        icon: <FontAwesomeIcon icon={faHome} />,
        url: '/',
        permission: [permissions.ADMIN, permissions.moderator, permissions.user],
    },
    {
        id: 2,
        label: <FormattedMessage id="orders" />,
        icon: <FontAwesomeIcon icon={faShoppingBasket} />,
        url: '/orders',
        permission: [permissions.ADMIN, permissions.moderator, permissions.user],
    },
    {
        id: 3,
        label: <FormattedMessage id="clients" />,
        icon: <FontAwesomeIcon icon={faUsers} />,
        url: '/clients',
        permission: [permissions.ADMIN, permissions.moderator, permissions.user],
    },
    {
        id: 4,
        label: <FormattedMessage id="configuration" />,
        icon: <FontAwesomeIcon icon={faTools} />,
        url: '/configuration',
        permission: [permissions.ADMIN],
    },
];

export default menuOptions;
