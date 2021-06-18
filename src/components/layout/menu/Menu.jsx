import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Wrapper, Item } from './Menu.style';

const menuOptions = [
    { name: 'contracts', restricted: false, path: '/contracts' },
    { name: 'ranking', restricted: false, path: '/ranking' },
];

const Menu = () => (
    <Wrapper>
        {menuOptions.map((item) => (
            <Link to={item.path} key={item.name}>
                <Item>
                    <FormattedMessage id={`menu.${item.name}`} />
                </Item>
            </Link>
        ))}
    </Wrapper>
);

export { Menu };
