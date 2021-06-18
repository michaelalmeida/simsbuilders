import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { Button } from 'antd';
import { Menu } from '../menu/Menu';

import { GridWrapper, HeaderBar, Logo, LoginArea } from './Header.style';
import { LogoText } from '../../style/Typography';

const Header = () => {
    return (
        <HeaderBar>
            <GridWrapper>
                <Logo>
                    <LogoText>simsbuilders</LogoText>
                </Logo>
                <Menu />
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
            </GridWrapper>
        </HeaderBar>
    );
};

export { Header };
