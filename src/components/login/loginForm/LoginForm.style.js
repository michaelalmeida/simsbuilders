import styled from 'styled-components';
import { colors } from '../../style/colors';

const { white, secondary } = colors;

export const FormItem = styled.div`
    margin: 0 0 20px;
`;

export const FormError = styled.div`
    font-size: 12px;
    color: ${secondary};
`;

export const LoginBoxForm = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    flex-basis: 360px;
    justify-content: center;
    background: ${white};
`;
