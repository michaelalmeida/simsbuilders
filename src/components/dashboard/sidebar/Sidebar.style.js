import styled from 'styled-components';
import { colors } from '../../style/colors';

const { white, background } = colors;

export const SidebarContainer = styled.div`
    display: flex;
    align-items: flex-stretch;
    flex-direction: column;
    flex-basis: 300px;
    height: 100%;
    background: ${white};
    box-sizing: border-box;
`;

export const SidebarLogoContainer = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${background};
`;
