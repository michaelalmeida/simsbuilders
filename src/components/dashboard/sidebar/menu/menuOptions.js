import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faShoppingBasket, faTools } from '@fortawesome/free-solid-svg-icons';
import permissions from '../../../../utils/permissions';

const menuOptions = [
    {
        id: 1,
        label: 'Home',
        icon: <FontAwesomeIcon icon={faHome} />,
        url: '/',
        permission: [permissions.ADMIN, permissions.moderator, permissions.user],
    },
    {
        id: 2,
        label: 'Pedidos',
        icon: <FontAwesomeIcon icon={faShoppingBasket} />,
        url: '/orders',
        permission: [permissions.ADMIN, permissions.moderator, permissions.user],
    },
    {
        id: 3,
        label: 'Clientes',
        icon: <FontAwesomeIcon icon={faUsers} />,
        url: '/',
        permission: [permissions.ADMIN, permissions.moderator, permissions.user],
    },
    {
        id: 4,
        label: 'Configurações',
        icon: <FontAwesomeIcon icon={faTools} />,
        url: '/',
        permission: [permissions.ADMIN],
    },
];

export default menuOptions;
