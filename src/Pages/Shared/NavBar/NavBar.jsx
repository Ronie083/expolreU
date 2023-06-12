import { Link } from "react-router-dom";
import logo from "../../../assets/My project.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useEnrollCart from "../../../Hooks/useEnrollCart";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [coursesCart, refetch] = useEnrollCart()

    const calculateSubtotal = (cartItems) => {
        refetch()
        if (!Array.isArray(cartItems) || cartItems.length === 0) {
          return 0;
        }
      
        let subtotal = 0;
        cartItems.forEach((item) => {
          subtotal += item.price;
        });
        return subtotal;
      };


    return (
        <div className="container navbar bg-gray-800 text-white sticky z-[900]">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52">
                    <li>
                        <a>MENU</a>
                        <ul className="p-2">
                            <li><Link to="instructors">Instructors</Link></li>
                            <li><Link to="classes">Classes</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <div>
                    <a href="/" className="btn btn-ghost md:text-xl"><img className="w-16 h-16 md:w-24 md:h-24" src={logo} alt="logo" />Explore-U</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu uppercase menu-horizontal px-1">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="instructors">Instructors</Link></li>
                    <li><Link to="classes">Classes</Link></li>
                </ul>
            </div>
            <div className="flex-none">
                {
                    user?.email ? (
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">{coursesCart?.length || 0}</span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body text-black">
                                        <span className="font-bold text-lg">{coursesCart?.length || 0} Items</span>
                                        <span className="text-info">Subtotal: ${calculateSubtotal(coursesCart)}</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        ""
                    )
                }
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar md:mx-3" title={user?.displayName}>
                        {
                            user?.email ? (
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            ) : (
                                <Link to="login">Login</Link>
                            )
                        }
                    </label>
                    {
                        user?.email ? (
                            <>
                                <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to="/dashboard/coursecart" className="justify-between">
                                            DASHBOARD
                                        </Link>
                                    </li>
                                    <li><a>PROFILE</a></li>
                                    <li><a onClick={logOut}>LOG OUT</a></li>
                                </ul>
                            </>
                        ) : (
                            ''
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;