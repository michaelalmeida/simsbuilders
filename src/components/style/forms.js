import styled from 'styled-components';
import { colors } from './colors';

const { secondary } = colors;

export const FormItem = styled.div`
    margin: 0 0 30px;
    display: flex;

    input:nth-child(2n) {
        margin-left: 30px;
    }
`;

export const FormError = styled.div`
    font-size: 12px;
    color: ${secondary};
`;
