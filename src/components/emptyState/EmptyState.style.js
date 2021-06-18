import styled from 'styled-components';

import CatSrc from '../../images/cat.svg';

export const Content = styled.div`
    padding: 60px 0;
    display: flex;
    margin: auto;
    height: 460px;
    flex-flow: column;
    align-items: center;
`;

export const CatIllustration = styled.img.attrs({
    src: CatSrc,
})`
    max-width: 100%;
`;
