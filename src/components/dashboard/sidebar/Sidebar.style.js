import styled from 'styled-components';
import { colors } from '../../style/colors';

const { white, background } = colors;

export const SidebarContainer = styled.div`
    display: flex;
    width: ${(props) => (props.isClosed ? '70px' : '250px')};
    align-items: flex-stretch;
    flex-direction: column;
    height: 100%;
    background: ${white};
    box-sizing: border-box;
`;

export const Header = styled.div`
    padding: 20px 0;
    display: flex;
    min-height: 80px;
    justify-content: center;
    border-bottom: 1px solid ${background};
`;

export const Content = styled.div`
    flex-grow: 1;
`;

export const Footer = styled.div`
    justify-content: flex-end;
    display: flex;
    border-top: 1px solid ${background};
`;

export const CloseFooter = styled.div`
    padding: 15px 30px;
    font-size: 2rem;
    border-left: 1px solid ${background};
    cursor: pointer;
`;
