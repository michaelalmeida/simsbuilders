import { getLastOpenContracts } from '../service';

export const LAST_CONTRACTS = 'LAST_CONTRACTS';

const initialState = {
    lastContracts: [],
};

export const contractReducer = (state = initialState, action) => {
    const { type, lastContracts } = action;

    switch (type) {
        case LAST_CONTRACTS:
            return {
                ...state,
                lastContracts,
            };
        default:
            return state;
    }
};

export const setLastContracts = (lastContracts) => {
    return {
        type: LAST_CONTRACTS,
        lastContracts,
    };
};

export const getLastContracts = ({ quantity }) => {
    return (dispatch) => {
        getLastOpenContracts({ quantity })
            .then((response) => dispatch(setLastContracts(response.data)))
            .catch((error) => error);
    };
};
