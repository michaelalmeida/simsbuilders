import styled from 'styled-components';
import { colors } from '../../style/colors';
import { secondaryFont, mainFont } from '../../style/fonts';

const { white, black, pink, grayLight, secondary } = colors;

export const Content = styled.div`
    width: 100%;
    padding: 0 0;
`;

export const Card = styled.div`
    overflow: hidden;
    margin: 60px 0;
    background: ${white};
    border-radius: 10px;
`;

export const Title = styled.div`
    padding: 30px 30px 0;
    ${secondaryFont}
    font-size: 2.8rem;
    font-weight: 700;
    color: ${black};
`;

export const Description = styled.div`
    padding: 0 30px;
    margin: 30px 0;
    ${mainFont}
    font-size: 1.4rem;
    font-weight: 400;
    color: ${black};
`;

export const Category = styled.div`
    margin: 0 30px 0 0;
    background: ${pink};
    width: 60px;
    height: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const Info = styled.div`
    overflow: hidden;
    align-items: center;
    justify-content: start;
    display: flex;
    background: ${grayLight};
`;

export const GeneralInfo = styled.div`
    display: grid;
    padding: 0 30px;
    grid-auto-flow: column;
    gap: 30px;
    grid-template-columns: 72px 70px 1fr;

    div {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

export const RoomType = styled.span`
    flex-grow: 1;
`;

export const CardButton = styled.button`
    background: ${secondary};
    border: 0;
    padding: 0 15px;
    height: 60px;
    cursor: pointer;
    ${secondaryFont}
    font-weight: 700;
    font-size: 1.4rem;
    text-transform: uppercase;
}`;
