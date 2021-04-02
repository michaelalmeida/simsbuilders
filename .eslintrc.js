module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    parser: 'babel-eslint',
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier', 'plugin:jsx-a11y/recommended'],
    plugins: ['jsx-a11y'],
    rules: {
        'import/prefer-default-export': 0,
        'no-console': 1,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'import/no-extraneous-dependencies': [1, { devDependencies: true }],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
