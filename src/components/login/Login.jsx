import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import { LoginForm } from './loginForm/LoginForm';

import { GlobalContainer } from '../style/Container';
import { LoginBox, LoginBoxInfo } from './Login.style';
import { H1, Paragraph } from '../style/Typography';

function Login() {
    const isAuth = useSelector(({ user }) => user.isAuth);

    return isAuth ? (
        <Redirect to="/" />
    ) : (
        <GlobalContainer>
            <LoginBox>
                <LoginForm />
                <LoginBoxInfo>
                    <span>
                        <H1 white>
                            <FormattedMessage id="welcome" />
                        </H1>
                        <Paragraph white>
                            <FormattedMessage id="welcomeInfo" />
                        </Paragraph>
                    </span>
                </LoginBoxInfo>
            </LoginBox>
        </GlobalContainer>
    );
}

export { Login };
