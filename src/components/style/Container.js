import styled from 'styled-components';
import { colors } from './colors';

const { background } = colors;

export const GlobalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    margin: 0;
    display: flex;
    background: ${background};
    height: 100vh;
`;
