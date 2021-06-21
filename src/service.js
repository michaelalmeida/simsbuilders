import axios from 'axios';

export const getLastOpenContracts = ({ quantity }) =>
    axios.get(`${process.env.REACT_APP_BASE_API}contracts/last/${quantity}`);

export const loginService = ({ password, username }) =>
    axios.post(`${process.env.REACT_APP_BASE_API}login`, {
        password,
        username,
    });

export const getUserContracts = ({ id }) =>
    axios.get(`${process.env.REACT_APP_BASE_API}contracts/byuser`, {
        id,
    });

export const logoutService = () => axios.get(`${process.env.REACT_APP_BASE_API}logout`);
