import styled from 'styled-components';

import { colors } from './colors';
import { mainFont, secondaryFont } from './fonts';

const { primary, white } = colors;

export const H1 = styled.h1`
    ${secondaryFont}
    font-size: 4.2rem;
    font-weight: 700;
    color: ${(props) => (props.white ? white : primary)};
`;

export const H2 = styled.h2`
    ${mainFont}
    margin: 0;
    padding: 0;
    font-size: 3.2rem;
    font-weight: 700;
    color: ${(props) => (props.white ? white : primary)};
`;

export const H3 = styled.h3`
    ${secondaryFont}
    font-size: 2.4rem;
    font-weight: normal;
    color: ${(props) => (props.white ? white : primary)};
`;

export const H5 = styled.h5`
    ${mainFont}
    font-size: 1.4rem;
    font-weight: 700;
    text-align: ${(props) => (props.right ? 'right' : 'left')};
    color: (props) => (props.white ? white : primary)};
    text-transform: uppercase;
`;

export const Paragraph = styled.p`
    ${mainFont}
    margin: 0;
    font-size: ${(props) => (props.small ? '1.4rem' : '1.6rem')};
    font-weight: 400;
    text-align: ${(props) => (props.right ? 'right' : 'left')};
    color: ${(props) => (props.white ? white : primary)};
`;

export const LogoText = styled.h5`
    float: right;
    ${secondaryFont}
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: ${(props) => (props.right ? 'right' : 'left')};
    color: ${(props) => (props.white ? white : primary)};
    text-transform: uppercase;
`;
