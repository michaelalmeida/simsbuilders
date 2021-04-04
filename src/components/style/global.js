import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const { background, primary, orange, primaryDarker, primaryLigther } = colors;

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
        --antd-wave-shadow-color: ${primary}; 
    }
    
    body {
        margin: 0;
        padding: 0;
        background: ${background};
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
    } 

    a {
        color: ${primary};

        &:hover {
            color: ${orange};
        }
    
    }
    .ant-btn-primary {
        border-color: ${primary};
        background: ${primary};

        &:hover {
            border-color: ${primaryDarker};
            background: ${primaryDarker};
        }
    }

    .ant-btn-link {
        color: ${primary};

        &:hover {
            color: ${primaryDarker};
        }
    }

    .ant-input:focus, .ant-input-focused,
    .ant-input-affix-wrapper:focus, 
    .ant-input-affix-wrapper-focused,
    .ant-input:focus, .ant-input-focused {
        border-color: ${primary};
        -webkit-box-shadow: 0 0 0 2px ${primaryLigther};
        box-shadow: 0 0 0 2px ${primaryLigther};
    }

    
    .ant-btn-primary:hover, .ant-btn-primary:focus {
        background:${primary};
        border-color: ${primary};
    }

    .ant-input-affix-wrapper:hover,
    .ant-input:hover,
    .ant-checkbox-checked::after, {
        border-color: ${primary};
    }

    .ant-form-item-explain, .ant-form-item-extra {
        font-size: 1.2rem
    }
  `;
