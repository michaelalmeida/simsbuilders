import styled from 'styled-components';
import { colors } from './colors';

const { secondary } = colors;

export const FormItem = styled.div`
    margin: 0 0 20px;
`;

export const FormError = styled.div`
    font-size: 12px;
    color: ${secondary};
`;
