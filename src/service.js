import axios from 'axios';

export const getLastOpenContracts = ({ quantity }) =>
    axios.get(`${process.env.REACT_APP_BASE_API}contracts/last/${quantity}`);

export const loginService = ({ password, username }) =>
    axios.post(`${process.env.REACT_APP_BASE_API}login`, {
        password,
        username,
    });

export const singupService = (payload) =>
    axios.post(`${process.env.REACT_APP_BASE_API}signup`, payload);

export const getUserContracts = ({ id }) =>
    axios.get(`${process.env.REACT_APP_BASE_API}contracts/byuser`, {
        id,
    });

export const getUserScore = ({ id }) =>
    axios.get(`${process.env.REACT_APP_BASE_API}user/score/${id}`);

export const logoutService = () => axios.get(`${process.env.REACT_APP_BASE_API}logout`);

export const createContractService = (payload) =>
    axios.post(`${process.env.REACT_APP_BASE_API}contract`, payload);
