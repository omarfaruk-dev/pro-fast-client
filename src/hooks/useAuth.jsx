import { use } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';

const useAuth = () => {
    const userInfo = use(AuthContext);
    return userInfo;
};

export default useAuth;