import styled from 'styled-components';
import { colors } from '../../style/colors';
import { MAX_WIDTH } from '../../style/sizes';

const { white } = colors;

export const HeaderBar = styled.div`
    padding: 15px 0;
    display: flex;
    background: ${white};
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.div`
    margin-right: 60px;
    flex-grow: 0;

    img {
        max-width: 40px;
    }
`;

export const LoginArea = styled.div`
    flex-grow: 0;
`;

export const GridWrapper = styled.div`
    display: flex;
    width: ${MAX_WIDTH};
    flex-direction: row;
    align-items: center;
`;
