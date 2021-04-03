import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import { Input, Button } from 'antd';
import { setUserAuth } from '../../../store/user';

import { INPUTNAMES } from '../login.constants';
import { LoginBoxForm, FormItem } from './LoginForm.style';

function LoginForm() {
    const { USERNAME, PASSWORD } = INPUTNAMES;

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
                    placeholder="User"
                    value={loginInfo.username}
                    onChange={handleInputChange}
                />
            </FormItem>
            <FormItem>
                <Input.Password
                    name={PASSWORD}
                    placeholder="Password"
                    value={loginInfo.password}
                    onChange={handleInputChange}
                />
            </FormItem>

            <span>
                <Button name="login" type="primary" onClick={loginSubmitHandler}>
                    <FormattedMessage id="login" />
                </Button>
                <Button type="link">
                    <FormattedMessage id="enrol" />
                </Button>
            </span>
        </LoginBoxForm>
    );
}

export { LoginForm };
