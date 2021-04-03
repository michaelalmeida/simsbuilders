import React from 'react';

import { GlobalContainer } from '../style/Container';
import { SignupBox, SignupBoxInfo, PersonalInformationIlustration } from './Signup.style';

function Signup() {
    return (
        <GlobalContainer>
            <SignupBox>
                <SignupBoxInfo>
                    <PersonalInformationIlustration />
                </SignupBoxInfo>
                <div>Cadas</div>
            </SignupBox>
        </GlobalContainer>
    );
}

export { Signup };
