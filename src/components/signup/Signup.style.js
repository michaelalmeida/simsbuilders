import styled from 'styled-components';
import { colors } from '../style/colors';

import PersonalInformatinSrc from '../../images/personal-information.svg';

const { white, primaryLigther } = colors;

export const SignupBox = styled.div`
    display: flex;
    align-items: flex-stretch;
    width: 960px;
    min-height: 600px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    background: ${white};
`;

export const SignupBoxInfo = styled.div`
    width: 350px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${primaryLigther};
`;

export const SignupFormWrapper = styled.div`
    flex-grow: 1;
    padding: 30px;
`;

export const PersonalInformationIlustration = styled.img.attrs({
    src: PersonalInformatinSrc,
})`
    max-width: 100%;
`;
