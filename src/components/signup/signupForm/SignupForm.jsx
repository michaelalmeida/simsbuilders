import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { FormattedMessage, useIntl } from 'react-intl';

import { Input, Button, Checkbox } from 'antd';
import { setUserAuth } from '../../../store/user';

import { INPUTNAMES } from '../signup.constants';

import { FormItem } from '../../style/forms';

function SignupForm() {
    const { USERNAME, PASSWORD, EMAIL } = INPUTNAMES;
    const intl = useIntl();

    const dispatch = useDispatch();

    const [loginInfo, setLoginInfo] = useState({ [USERNAME]: '', [PASSWORD]: '', [EMAIL]: '' });

    const loginSubmitHandler = () => {
        dispatch(setUserAuth(true));
    };

    const handleInputChange = (event) => {
        setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
    };

    return (
        <div>
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
            <FormItem>
                <Input
                    name={EMAIL}
                    placeholder={intl.formatMessage({ id: 'email' })}
                    value={loginInfo.email}
                    onChange={handleInputChange}
                />
            </FormItem>
            <FormItem>
                <Checkbox
                    onChange={(e) => {
                        console.log(e);
                    }}>
                    <FormattedMessage id="signup.terms" />
                </Checkbox>
            </FormItem>
            <span>
                <Button name="login" type="primary" onClick={loginSubmitHandler}>
                    <FormattedMessage id="enrol" />
                </Button>
                <Link to="/">
                    <Button type="link">
                        <FormattedMessage id="cancel" />
                    </Button>
                </Link>
            </span>
        </div>
    );
}

export { SignupForm };
