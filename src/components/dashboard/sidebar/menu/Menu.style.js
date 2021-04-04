import styled from 'styled-components';
import { mainFont } from '../../../style/fonts';
import { colors } from '../../../style/colors';

const { background } = colors;

export const List = styled.ul`
    list-style: none;
    padding: ${(props) => (props.isClosed ? '0 15px' : '0 30px')};
    margin-top: 60px;
`;

export const Icon = styled.span`
    width: 20px;
    margin-right: 20px;
    font-size: 2rem;
`;

export const Item = styled.li`
    margin-bottom: 10px;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: ${background};
    }
`;

export const Label = styled.span`
    ${mainFont}
    font-size: 1.8rem;
    font-weight: 400;
`;
