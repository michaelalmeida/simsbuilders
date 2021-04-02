import styled from 'styled-components';
import { colors } from '../style/colors';

const { primary } = colors;

export const LoginBox = styled.div`
    display: flex;
    align-items: flex-stretch;
    width: 700px;
    height: 400px;
    background: ${primary};
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

export const LoginBoxInfo = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 2;
`;
