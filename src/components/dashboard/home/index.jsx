import React from 'react';

import { H2, Paragraph } from '../../style/Typography';
import { Header, OverviewBlock } from './Home.style';

const Home = () => {
    return (
        <Header>
            <OverviewBlock>
                <Paragraph>Pedidos</Paragraph>
                <H2>200</H2>
            </OverviewBlock>
            <OverviewBlock>
                <Paragraph>Clientes</Paragraph>
                <H2>220</H2>
            </OverviewBlock>
            <OverviewBlock>
                <Paragraph>Entregas realizadas</Paragraph>
                <H2>200</H2>
            </OverviewBlock>
            <OverviewBlock warning>
                <Paragraph>Entregas pendentes</Paragraph>
                <H2>23</H2>
            </OverviewBlock>
        </Header>
    );
};

export { Home };
