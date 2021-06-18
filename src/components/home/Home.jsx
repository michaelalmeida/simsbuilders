import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Skeleton } from 'antd';
import { getLastContracts } from '../../store/contract';

import { Highlights } from './highlights/Highlights';
import { LastContracts } from './lastcontracts/LastContracts';

import { Wrapper } from '../style/Container';

const Home = () => {
    const isAuth = useSelector(({ user }) => user.isAuth);
    const lastContracts = useSelector(({ contract }) => contract.lastContracts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (lastContracts.length === 0) dispatch(getLastContracts({ quantity: 3 }));
    }, [0]);

    return (
        <>
            {!isAuth && <Highlights />}
            {lastContracts.length !== 0 ? (
                <LastContracts lastContractsList={lastContracts} />
            ) : (
                <Wrapper>
                    <Skeleton active />
                </Wrapper>
            )}
        </>
    );
};

export { Home };
