import axios from 'axios';

export const getLastOpenContracts = ({ quantity }) =>
    axios.get(`${process.env.REACT_APP_BASE_API}contracts/last/${quantity}`);
