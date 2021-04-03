import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { FormattedMessage, useIntl } from 'react-intl';

import { Input, Button } from 'antd';
import { setUserAuth } from '../../../store/user';

import { INPUTNAMES } from '../login.constants';
import { LoginBoxForm, FormItem } from './LoginForm.style';

function LoginForm() {
    const { USERNAME, PASSWORD } = INPUTNAMES;
    const intl = useIntl();

    const dispatch = useDispatch();

    const [loginInfo, setLoginInfo] = useState({ [USERNAME]: '', [PASSWORD]: '' });

    const loginSubmitHandler = () => {
        dispatch(setUserAuth(true));
    };

    const handleInputChange = (event) => {
        setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
    };

    return (
        <LoginBoxForm>
            <FormItem>
                <Input
                    name={USERNAME}
                    placeholder={intl.formatMessage({ id: 'username' })}
                    value={loginInfo.username}
                    onChange={handleInputChange}
                />
            </FormItem>
            <FormItem>
                <Input.Password
                    name={PASSWORD}
                    placeholder={intl.formatMessage({ id: 'password' })}
                    value={loginInfo.password}
                    onChange={handleInputChange}
                />
            </FormItem>

            <span>
                <Button name="login" type="primary" onClick={loginSubmitHandler}>
                    <FormattedMessage id="login" />
                </Button>
                <Link to="/signup">
                    <Button type="link">
                        <FormattedMessage id="enrol" />
                    </Button>
                </Link>
            </span>
        </LoginBoxForm>
    );
}

export { LoginForm };
