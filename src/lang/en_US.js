const formValidations = {
    invalidUser: 'Enter a valid user',
    emptyUser: 'Input your user',
    emptyPassword: 'Input your password',
};

const login = {
    welcome: 'Welcome!',
    welcomeInfo: 'You need to be autentificated to use all the system resources',
};

const buttons = {
    loginButton: 'Login',
    loginHelp: 'Forget password',
};

export default {
    ...formValidations,
    ...login,
    ...buttons,
};
