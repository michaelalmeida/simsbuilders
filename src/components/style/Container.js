import styled from 'styled-components';
import { colors } from './colors';
import { MAX_WIDTH, FULL } from './sizes';

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
    width: ${(props) => (props.noFullScreen ? '1280px' : '100%')};
    height: 100vh;
    flex-direction: column;
`;

export const MainContent = styled.div`
    display: flex;
    background: ${background};
    height: 100vh;
    flex-direction: column;
    flex-grow: 1;
`;

export const Wrapper = styled.div`
    flex-grow: 1;
    margin: auto;
    display: flex;
    width: ${MAX_WIDTH};

    @media (max-width: 700px) {
        width: ${FULL};
    }
`;

export const WrapperGrid = styled.div`
    margin: auto;
    display: grid;
    width: ${MAX_WIDTH};
    grid-auto-flow: column;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 700px) {
        width: ${FULL};
    }
`;
