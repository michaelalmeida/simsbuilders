import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import options from './menuOptions';

import * as S from './Menu.style';

const Menu = ({ isClosed }) => {
    return (
        <S.List isClosed={isClosed}>
            {options.map(({ id, icon, label, url }) => (
                <Link to={url} key={id}>
                    <S.Item>
                        <S.Icon>{icon}</S.Icon>
                        {!isClosed && <S.Label>{label}</S.Label>}
                    </S.Item>
                </Link>
            ))}
        </S.List>
    );
};

Menu.propTypes = {
    isClosed: PropTypes.bool.isRequired,
};

export { Menu };
