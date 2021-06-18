import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as S from './LastContracts.style';

import { WrapperGrid } from '../../style/Container';
import { CategoryIcon } from '../../category/CategoryIcon';

const LastContracts = ({ lastContractsList }) => {
    const isAuth = useSelector(({ user }) => user.isAuth);
    return (
        <>
            {isAuth && 'loggerd'}
            <S.Content>
                <WrapperGrid>
                    {lastContractsList.map((contract) => (
                        // eslint-disable-next-line no-underscore-dangle
                        <S.Card key={contract._id}>
                            <S.Title>{contract.name}</S.Title>
                            <S.Description>{contract.description.summary}</S.Description>
                            <S.GeneralInfo style={{ marginTop: '30px' }}>
                                <div>
                                    <FormattedMessage id="payment" />
                                </div>
                                <div>
                                    <FormattedMessage id="size" />
                                </div>
                                <div>
                                    <FormattedMessage id="contrator" />
                                </div>
                            </S.GeneralInfo>
                            <S.GeneralInfo style={{ marginBottom: '30px' }}>
                                <div>§ {contract.payment}</div>
                                <div>{contract.size}</div>
                                <div>{contract.contractor.username}</div>
                            </S.GeneralInfo>
                            <S.Info>
                                <S.Category>
                                    <CategoryIcon type={contract.description.type} />
                                </S.Category>
                                <S.RoomType>
                                    <FormattedMessage
                                        id={`category.${contract.description.type}`}
                                    />
                                </S.RoomType>
                                <S.CardButton type="button">Aceitar contrato</S.CardButton>
                            </S.Info>
                        </S.Card>
                    ))}
                </WrapperGrid>
            </S.Content>
        </>
    );
};

LastContracts.propTypes = {
    lastContractsList: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.shape({
                summary: PropTypes.string,
                colors: PropTypes.arrayOf(PropTypes.string),
                style: PropTypes.string,
                type: PropTypes.string,
            }),
            payment: PropTypes.number,
            size: PropTypes.string,
            contractor: PropTypes.shape({
                _id: PropTypes.string,
                username: PropTypes.string,
            }),
            roomtype: PropTypes.string,
        })
    ).isRequired,
};

export { LastContracts };
