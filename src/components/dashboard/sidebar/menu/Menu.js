import React from 'react';

import options from './menuOptions';

import * as S from './Menu.style';

export const Menu = () => {
    return (
        <S.List>
            {options.map((item) => (
                <S.Item>
                    <S.Icon>{item.icon}</S.Icon>
                    <S.Label>{item.label}</S.Label>
                </S.Item>
            ))}
        </S.List>
    );
};
