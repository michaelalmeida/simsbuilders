import styled from 'styled-components';
import { colors } from '../style/colors';

import PersonalInformatinSrc from '../../images/personal-information.svg';

const { primaryLigther } = colors;

export const SignupBox = styled.div`
    display: flex;
    align-items: flex-stretch;
    width: 960px;
    min-height: 400px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

export const SignupBoxInfo = styled.div`
    width: 350px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${primaryLigther};
`;

export const PersonalInformationIlustration = styled.img.attrs({
    src: PersonalInformatinSrc,
})``;
