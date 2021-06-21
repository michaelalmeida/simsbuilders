import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Loading } from '../loading/Loading';

import { setLogout } from '../../store/user';

const Signout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLogout());
    }, [0]);

    return <Loading loading />;
};

export { Signout };
