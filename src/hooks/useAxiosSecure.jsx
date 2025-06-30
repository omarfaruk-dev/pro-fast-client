import axios from 'axios';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: `http://localhost:3000`
});

const useAxiosSecure = () => {
    const { user } = useAuth();

    axiosSecure.interceptors.request.use(config => {
        if (user?.accessToken) {
            config.headers.Authorization = `Bearer ${user.accessToken}`
        }
        return config;
    }, error => {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            console.log('Logout the user');
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;