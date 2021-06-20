import styled from 'styled-components';
import { colors } from '../../style/colors';

const { pink, primary } = colors;

export const Menu = styled.ul`
    list-style: none;
    flex-grow: 1;
    margin: 0;
    padding: 0;

    a {
        color: ${primary};
    }
`;

export const Item = styled.li`
    padding: 10px;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
        box-shadow: 0px 2px 0px 0px ${pink};
    }
`;
