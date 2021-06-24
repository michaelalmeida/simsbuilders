import React from 'react';
import styled from 'styled-components';
import { colors } from '../style/colors';

import './welcome.css';

const { primary, white } = colors;

export const WelcomeWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    background: ${primary};
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h3`
    font-size: 4.8rem;
    color: ${white};
`;

const Welcome = () => (
    <WelcomeWrapper>
        <div className="container">
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
            <div className="confetti-piece" />
        </div>
        <Title>Welcome!</Title>
        <img src="https://i.giphy.com/media/wM0IbbTKs2yhXck0sP/giphy.webp" alt="Dancing" />
    </WelcomeWrapper>
);

export default Welcome;
