import styled from 'styled-components';
import { colors } from '../style/colors';

import { FULL } from '../style/sizes';
import UsingNotebookSrc from '../../images/using-notebook.svg';

const { pink, white } = colors;

export const Content = styled.div`
    padding: 60px 0;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    width: ${FULL};
    background: ${pink};

    div {
        position: relative;
    }
`;

export const Sidebar = styled.div`
    margin-top: 60px;
    width: 350px;
`;

export const FormWrapper = styled.div`
    padding-bottom: 60px;
    width: ${FULL};
    background: ${white};
`;

export const Form = styled.div`
    margin-top: 60px;
    width: ${FULL};
`;

export const FormItem = styled.div`
    margin: 0 0 30px;
    display: flex;
    justify-content: space-between;

    div:not(.ant-select-selection-overflow, .ant-select-selection-overflow-item, .ant-select-selector) {
        width: 30%;

        & > span:not(.ant-tag) {
            span:first-child {
                width: 100%;
            }
        }
    }
`;

export const Legend = styled.div`
    margin: 0;
    display: flex;
    justify-content: space-between;

    h4 {
        width: 30%;
    }
`;

export const FormItemDiv = styled.div`
    margin: 0 0 30px;
`;

export const Copybutton = styled.div`
    border: 0;
    cursor: pointer;
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

export const UsingNotebookIllustration = styled.img.attrs({
    src: UsingNotebookSrc,
})`
    position: absolute;
    top: -60px;
    right: 0;
    max-width: 400px;
`;
