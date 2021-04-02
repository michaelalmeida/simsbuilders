export const IS_AUTH = 'IS_AUTH';

const initialState = {
    isAuth: false,
    theme: 'default',
    userData: {
        name: '',
        age: 0,
    },
};

export const userReducer = (state = initialState, action) => {
    const { type, isAuth } = action;

    switch (type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth,
            };
        default:
            return state;
    }
};

export const setUserAuth = (isAuth) => {
    return {
        type: IS_AUTH,
        isAuth,
    };
};
