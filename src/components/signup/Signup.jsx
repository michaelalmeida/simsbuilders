import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SignupForm } from './signupForm/SignupForm';

import { GlobalContainer } from '../style/Container';

import {
    SignupBox,
    SignupBoxInfo,
    PersonalInformationIlustration,
    SignupFormWrapper,
} from './Signup.style';

import { H1, Paragraph } from '../style/Typography';

function Signup() {
    return (
        <GlobalContainer>
            <SignupBox>
                <SignupBoxInfo>
                    <PersonalInformationIlustration />
                </SignupBoxInfo>
                <SignupFormWrapper>
                    <H1>
                        <FormattedMessage id="signup" />
                    </H1>
                    <Paragraph>
                        <FormattedMessage id="signup.info" />
                    </Paragraph>
                    <SignupForm />
                </SignupFormWrapper>
            </SignupBox>
        </GlobalContainer>
    );
}

export { Signup };
