import { notification } from 'antd';
import { loginService, logoutService, singupService } from '../service';
import userCookie from '../utils/cookieHandler';

export const IS_AUTH = 'IS_AUTH';
export const SET_USERINFO = 'SET_USERINFO';
export const IS_LOGGING = 'IS_LOGGING';
export const IS_SINGNING = 'IS_SINGNING';

export const initialState = {
    isAuth: false,
    isLogging: false,
    isSingning: false,
    theme: 'default',
    userInfo: {
        name: '',
        username: '',
        id: '',
    },
};

export const userReducer = (state = initialState, action) => {
    const { type, isAuth, userInfo, isLogging, isSingning } = action;

    switch (type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth,
            };
        case IS_LOGGING:
            return {
                ...state,
                isLogging,
            };
        case IS_SINGNING:
            return {
                ...state,
                isSingning,
            };
        case SET_USERINFO:
            return {
                ...state,
                userInfo: {
                    ...userInfo,
                },
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

export const setIsLogging = (isLogging) => {
    return {
        type: IS_LOGGING,
        isLogging,
    };
};

export const setIsSinging = (isSingning) => {
    return {
        type: IS_SINGNING,
        isSingning,
    };
};

export const setUserInfo = (userInfo) => {
    return {
        type: SET_USERINFO,
        userInfo,
    };
};

export const setLogin = ({ username, password }) => {
    return (dispatch) => {
        dispatch(setIsLogging(true));

        loginService({ username, password })
            .then((res) => {
                userCookie.userName = res.data.username;
                userCookie.userId = res.data._id;
                userCookie.name = res.data.name;
                dispatch(setUserAuth(true));
                dispatch(
                    setUserInfo({
                        name: res.data.name,
                        username: res.data.username,
                        id: res.data._id,
                    })
                );
            })
            .catch(() =>
                notification.error({
                    message: 'ops',
                    description: 'Wrong username or password, try again!',
                    placement: 'topRight ',
                })
            )
            .finally(() => {
                dispatch(setIsLogging(false));
            });
    };
};

export const setLogout = () => {
    return (dispatch) => {
        logoutService()
            .then(() => {
                userCookie.cleanCookies();
                dispatch(setUserAuth(false));
                dispatch(
                    setUserInfo({
                        userInfo: {
                            name: '',
                            username: '',
                            id: '',
                        },
                    })
                );
            })
            .catch(() =>
                notification.error({
                    message: 'ops',
                    description: 'Try again later!',
                    placement: 'topRight ',
                })
            )
            .finally(() => {
                document.location.href = '/';
            });
    };
};

export const setSingup = (payload) => {
    return (dispatch) => {
        dispatch(setIsSinging(true));

        singupService(payload)
            .then((res) => {
                userCookie.userName = res.data.username;
                userCookie.userId = res.data._id;
                userCookie.name = res.data.name;
                dispatch(setUserAuth(true));
                dispatch(
                    setUserInfo({
                        name: res.data.name,
                        username: res.data.username,
                        id: res.data._id,
                    })
                );
                notification.success({
                    message: '😍',
                    description: 'Welcome!',
                    placement: 'topRight ',
                });
                document.location.href = '/';
            })
            .catch(() =>
                notification.error({
                    message: 'Ops!!',
                    description: 'Username already exists!',
                    placement: 'topRight ',
                })
            )
            .finally(() => {
                dispatch(setIsSinging(false));
            });
    };
};
