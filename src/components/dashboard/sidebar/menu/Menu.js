import React from 'react';
import { Link } from 'react-router-dom';

import options from './menuOptions';

import * as S from './Menu.style';

export const Menu = () => {
    return (
        <S.List>
            {options.map(({ id, icon, label, url }) => (
                <Link to={url} key={id}>
                    <S.Item>
                        <S.Icon>{icon}</S.Icon>
                        <S.Label>{label}</S.Label>
                    </S.Item>
                </Link>
            ))}
        </S.List>
    );
};
