import React from 'react';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { Menu, Item } from './Usermenu.style';

const menuOptions = [
    { name: 'profile', restricted: true, path: '/profile' },
    { name: 'my-contracts', restricted: true, path: '/my-contracts' },
    { name: 'create-contract', restricted: true, path: '/create-contract' },
    { name: 'exit', restricted: true, path: '/signout' },
];

const UserMenuContent = (
    <Menu>
        {menuOptions.map((item) => (
            <Link to={item.path} key={item.name}>
                <Item>
                    <FormattedMessage id={`menu.${item.name}`} />
                </Item>
            </Link>
        ))}
    </Menu>
);

const Usermenu = ({ children }) => (
    <Popover placement="bottom" content={UserMenuContent} trigger="click">
        {children}
    </Popover>
);

Usermenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export { Usermenu };
