import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useEnrollCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    // console.log(token)

    const { refetch, data: coursesCart = [] } = useQuery(['coursesCart', user?.email], async () => {
        const res = await fetch(`https://explore-u-summer-camp-server.vercel.app/enrolledCart?email=${user.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        });
        return res.json();
    });

    return [coursesCart, refetch];
};

export default useEnrollCart;
