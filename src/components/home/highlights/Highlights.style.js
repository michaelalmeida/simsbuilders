import styled from 'styled-components';
import { colors } from '../../style/colors';

import { MAX_WIDTH } from '../../style/sizes';
import DecorSrc from '../../../images/decor.svg';

const { secondary, pink, white } = colors;

export const Item = styled.div`
    background: ${secondary};
    // background: linear-gradient(to bottom, ${secondary}, ${pink});
`;

export const Content = styled.div`
    padding: 0 0;
    display: flex;
    width: ${MAX_WIDTH};
    margin: auto;
    height: 460px;
`;

export const Text = styled.div`
    width: 60%;
    padding: 60px;
    display: flex;
    flex-grow: 1;
    flex-flow: column;

    p {
        margin-bottom: 60px;
        border-left: 6px solid ${pink};
        padding: 10px 0 10px 20px;
        font-size: 2rem;
        font-weight: 300;
    }

    button {
        background: ${white};

        &:hover {
            background: ${white};
        }
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    width: 360px;
    overflow: hidden;
    flex-grow: 1;
    position: relative;

    img {
        z-index: 2;
    }

    &:before {
        content: '';
        position: absolute;
        width: 300px;
        height: 300px;
        background: ${pink};
        border-radius: 100%;
        z-index: 1;
        top: calc(50% - 100px);
    }
`;

export const DecorIllustration = styled.img.attrs({
    src: DecorSrc,
})`
    max-width: 100%;
`;
