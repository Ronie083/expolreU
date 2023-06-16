import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

const useAdmin = () => {
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const token = localStorage.getItem('access-token');

    useEffect(() => {
        const fetchAdminStatus = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const res = await axios.get(`https://explore-u-summer-camp-server.vercel.app/users/admin/${user.email}`, config);
                setIsAdmin(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAdminStatus();
    }, [user.email, token]);

    return isAdmin;
};

export default useAdmin;
