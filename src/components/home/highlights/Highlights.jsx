import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';

import { H1, Paragraph } from '../../style/Typography';
import { Item, Content, Text, ImageWrapper, DecorIllustration } from './Highlights.style';

const Highlights = () => {
    return (
        <Item>
            <Content>
                <Text>
                    <H1>
                        <FormattedMessage id="highlights.title" />
                    </H1>
                    <Paragraph>
                        <FormattedMessage id="highlights.description" />
                    </Paragraph>
                    <Link to="/signup">
                        <Button type="link">
                            <FormattedMessage id="enrol" />
                        </Button>
                    </Link>
                </Text>
                <ImageWrapper>
                    <DecorIllustration />
                </ImageWrapper>
            </Content>
        </Item>
    );
};

export { Highlights };
