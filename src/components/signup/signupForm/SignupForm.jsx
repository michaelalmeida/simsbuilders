import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { FormattedMessage, useIntl } from 'react-intl';

import { Input, Button, Checkbox, Select, notification } from 'antd';
import { setSingup } from '../../../store/user';

import { INPUTNAMES } from '../signup.constants';

import { FormItem } from '../../style/forms';
import { Loading } from '../../loading/Loading';

const { Option } = Select;

function SignupForm() {
    const { USERNAME, PASSWORD, EMAIL, LANGUAGE, NAME, TERMS, PASSWORD_REPEAT } = INPUTNAMES;
    const intl = useIntl();
    const isSingning = useSelector(({ user }) => user.isSingning);
    const [passwordValidation, setPasswordValidation] = useState(false);

    const dispatch = useDispatch();

    const [signupInfo, setSignupInfo] = useState({
        [USERNAME]: '',
        [PASSWORD]: '',
        [NAME]: '',
        [EMAIL]: '',
        [LANGUAGE]: '',
        [TERMS]: false,
        [PASSWORD_REPEAT]: '',
    });

    const loginSubmitHandler = () => {
        if (signupInfo[PASSWORD].localeCompare(signupInfo[PASSWORD_REPEAT]) !== 0) {
            setPasswordValidation(true);
            notification.error({
                message: 'Ops!!',
                description: intl.formatMessage({ id: 'passwordnotmatch' }),
                placement: 'topRight ',
            });
        } else {
            setPasswordValidation(false);
            const payload = { ...signupInfo };
            delete payload[TERMS];
            delete payload[PASSWORD_REPEAT];
            dispatch(setSingup(payload));
        }
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
            <Loading loading={isSingning} />
            <p>
                <FormattedMessage id="user.instructions" />
            </p>
            <FormItem>
                <Input
                    name={USERNAME}
                    placeholder={intl.formatMessage({ id: 'gallery' })}
                    value={signupInfo[USERNAME]}
                    onChange={handleInputChange}
                />
                <Input
                    name={USERNAME}
                    placeholder={intl.formatMessage({ id: 'username' })}
                    value={signupInfo[USERNAME]}
                    disabled
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
                <Input
                    name={NAME}
                    placeholder={intl.formatMessage({ id: 'name' })}
                    value={signupInfo[NAME]}
                    onChange={handleInputChange}
                />
            </FormItem>
            <FormItem>
                <Input.Password
                    name={PASSWORD}
                    placeholder={intl.formatMessage({ id: 'password' })}
                    value={signupInfo[PASSWORD]}
                    onChange={handleInputChange}
                />

                <Input.Password
                    name={PASSWORD_REPEAT}
                    placeholder={intl.formatMessage({ id: 'password.repeat' })}
                    value={signupInfo[PASSWORD_REPEAT]}
                    onChange={handleInputChange}
                    style={passwordValidation ? { borderColor: 'red' } : { borderColor: '#d9d9d9' }}
                />
            </FormItem>
            <FormItem>
                <Input
                    name={EMAIL}
                    placeholder={intl.formatMessage({ id: 'email' })}
                    value={signupInfo[EMAIL]}
                    onChange={handleInputChange}
                />
            </FormItem>
            <FormItem>
                <Checkbox name={TERMS} onChange={handleCheckChange}>
                    <FormattedMessage id="signup.terms" />
                    <a
                        href="https://docs.google.com/document/d/1wItgkDaNt6fQQRhlc7lp4NFTvvZBleLrwqrskI8aWbo/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer">
                        <FormattedMessage id="signup.terms.check" />
                    </a>
                </Checkbox>
            </FormItem>
            <span>
                <Button
                    name="signup"
                    type="primary"
                    onClick={loginSubmitHandler}
                    disabled={!signupInfo[TERMS]}>
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
