import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button, Avatar } from 'antd';
import { Menu } from '../menu/Menu';

import { GridWrapper, HeaderBar, Logo, LoginArea } from './Header.style';
import { LogoText } from '../../style/Typography';

import { Usermenu } from '../usermenu/Usermenu';

const Header = () => {
    const isAuth = useSelector(({ user }) => user.isAuth);
    const userInfo = useSelector(({ user }) => user.userInfo);

    return (
        <HeaderBar>
            <GridWrapper>
                <Logo>
                    <LogoText>simsbuilders</LogoText>
                </Logo>
                <Menu />
                {isAuth ? (
                    <Usermenu>
                        <Avatar style={{ cursor: 'pointer' }}>{userInfo.name.slice(0, 1)}</Avatar>
                    </Usermenu>
                ) : (
                    <LoginArea>
                        <Link to="/login">
                            <Button name="login" type="primary">
                                <FormattedMessage id="login" />
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button type="link">
                                <FormattedMessage id="enrol" />
                            </Button>
                        </Link>
                    </LoginArea>
                )}
            </GridWrapper>
        </HeaderBar>
    );
};

export { Header };
