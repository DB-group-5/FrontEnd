import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'https://backend-production-81ea.up.railway.app',   
});

AxiosInstance.interceptors.request.use((config) => {
    const token = `Bearer ${localStorage.getItem('token')}`;
    config.headers['token'] = token;
    config.errorContext = new Error('Thrown at:'); // tracking error location
    return config;
});

export default AxiosInstance;
