import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { FormattedMessage, useIntl } from 'react-intl';

import { Input, Button, Checkbox, Select } from 'antd';
import { setUserAuth } from '../../../store/user';

import { INPUTNAMES } from '../signup.constants';

import { FormItem } from '../../style/forms';

const { Option } = Select;

function SignupForm() {
    const { USERNAME, PASSWORD, EMAIL, LANGUAGE, TERMS } = INPUTNAMES;
    const intl = useIntl();

    const dispatch = useDispatch();

    const [signupInfo, setSignupInfo] = useState({
        [USERNAME]: '',
        [PASSWORD]: '',
        [EMAIL]: '',
        [LANGUAGE]: '',
        [TERMS]: false,
    });

    const loginSubmitHandler = () => {
        dispatch(setUserAuth(true));
    };

    const handleInputChange = (event) => {
        setSignupInfo({ ...signupInfo, [event.target.name]: event.target.value });
    };

    const handleSelectChange = (value) => {
        setSignupInfo({ ...signupInfo, [LANGUAGE]: value });
    };

    const handleCheckChange = () => {
        setSignupInfo({ ...signupInfo, [TERMS]: !signupInfo.terms });
    };

    return (
        <div>
            <FormItem>
                <Input
                    name={USERNAME}
                    placeholder={intl.formatMessage({ id: 'gallery' })}
                    value={signupInfo.username}
                    onChange={handleInputChange}
                />
                <Input
                    name={USERNAME}
                    placeholder={intl.formatMessage({ id: 'username' })}
                    value={signupInfo.username}
                    disabled
                />
            </FormItem>

            <FormItem>
                <Input
                    name={EMAIL}
                    placeholder={intl.formatMessage({ id: 'email' })}
                    value={signupInfo.email}
                    onChange={handleInputChange}
                />
            </FormItem>

            <FormItem>
                <Select
                    name={LANGUAGE}
                    style={{ width: '100%' }}
                    placeholder={intl.formatMessage({ id: 'language' })}
                    onChange={handleSelectChange}>
                    <Option value="pt_BR">Português</Option>
                    <Option value="en_US">English</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Input.Password
                    name={PASSWORD}
                    placeholder={intl.formatMessage({ id: 'password' })}
                    value={signupInfo.password}
                    onChange={handleInputChange}
                />
            </FormItem>
            <FormItem>
                <Checkbox name={TERMS} onChange={handleCheckChange}>
                    <FormattedMessage id="signup.terms" />
                </Checkbox>
            </FormItem>
            <span>
                <Button
                    name="signup"
                    type="primary"
                    onClick={loginSubmitHandler}
                    disabled={!signupInfo.terms}>
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
