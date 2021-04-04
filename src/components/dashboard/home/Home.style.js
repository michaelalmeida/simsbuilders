import styled from 'styled-components';
import { colors } from '../../style/colors';

const { white, secondary } = colors;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
`;

export const OverviewBlock = styled.div`
    margin: 0 30px 0 0;
    padding: 30px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    background: ${(props) => (props.warning ? secondary : white)};
    border-radius: 10px;
`;
