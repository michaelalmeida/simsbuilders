import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { FormattedMessage, useIntl } from 'react-intl';

import { Input, Button, Alert } from 'antd';

import { INPUTNAMES } from '../login.constants';
import { LoginBoxForm } from './LoginForm.style';
import { FormItem } from '../../style/forms';

import { Loading } from '../../loading/Loading';

import { setLogin } from '../../../store/user';

function LoginForm() {
    const { USERNAME, PASSWORD } = INPUTNAMES;
    const intl = useIntl();
    const isLogging = useSelector(({ user }) => user.isLogging);

    const dispatch = useDispatch();

    const [loginInfo, setLoginInfo] = useState({ [USERNAME]: '', [PASSWORD]: '' });
    const [isFieldsWithError, setIsFieldsWithError] = useState(false);

    const loginSubmitHandler = () => {
        if (loginInfo[USERNAME].length === 0 || loginInfo[PASSWORD].length === 0) {
            setIsFieldsWithError(true);
        } else {
            setIsFieldsWithError(false);
            dispatch(
                setLogin({ [USERNAME]: loginInfo[USERNAME], [PASSWORD]: loginInfo[PASSWORD] })
            );
        }
    };

    const handleInputChange = (event) => {
        setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
    };

    return (
        <LoginBoxForm>
            <Loading loading={isLogging} />
            <FormItem>
                <Input
                    name={USERNAME}
                    placeholder={intl.formatMessage({ id: 'username' })}
                    value={loginInfo[USERNAME]}
                    onChange={handleInputChange}
                />
            </FormItem>
            <FormItem>
                <Input.Password
                    name={PASSWORD}
                    placeholder={intl.formatMessage({ id: 'password' })}
                    value={loginInfo[PASSWORD]}
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
            {isFieldsWithError && (
                <Alert
                    style={{ marginTop: '30px' }}
                    message={<FormattedMessage id="login.empty-fieds" />}
                    type="error"
                    showIcon
                />
            )}
        </LoginBoxForm>
    );
}

export { LoginForm };
