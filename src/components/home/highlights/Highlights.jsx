import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';

import { H1, Paragraph } from '../../style/Typography';
import { Item, Content, Text, ImageWrapper, DecorIllustration } from './Highlights.style';

const Highlights = ({ isLogged, userInfo }) => {
    return (
        <Item>
            <Content>
                <Text>
                    <H1>
                        {userInfo.name ? (
                            <>
                                <FormattedMessage id="welcome" /> {userInfo.name}
                            </>
                        ) : (
                            <FormattedMessage id="highlights.title" />
                        )}
                    </H1>
                    <Paragraph>
                        <FormattedMessage
                            id={
                                isLogged
                                    ? 'highlights.description.logged'
                                    : 'highlights.description'
                            }
                        />
                    </Paragraph>
                    {isLogged ? (
                        <Link to="/create-contract">
                            <Button type="link">
                                <FormattedMessage id="contract.create" />
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/signup">
                            <Button type="link">
                                <FormattedMessage id="enrol" />
                            </Button>
                        </Link>
                    )}
                </Text>
                <ImageWrapper>
                    <DecorIllustration />
                </ImageWrapper>
            </Content>
        </Item>
    );
};

Highlights.propTypes = {
    isLogged: PropTypes.bool,
    userInfo: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        username: PropTypes.string,
    }),
};

Highlights.defaultProps = {
    isLogged: false,
    userInfo: {
        name: '',
        username: '',
        id: '',
    },
};

export { Highlights };
