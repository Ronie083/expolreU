import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { BsClipboard2PlusFill, BsFillBookmarkStarFill, BsFillJournalBookmarkFill, BsHouseDownFill, BsPersonFillGear } from "react-icons/bs";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState({})
    console.log('from de', user.email);


    useEffect(() => {
        fetch(`https://explore-u-summer-camp-server.vercel.app/usersSingle/${user.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user.email])




    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content items-center">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                            {users?.role === 'admin' ? (
                                <div id="adminLayout">
                                    <li>
                                        <NavLink to="/dashboard/manageclasses">
                                            <BsClipboard2PlusFill /> Manage Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageuser">
                                            <BsPersonFillGear /> Manage Users
                                        </NavLink>
                                    </li>
                                </div>
                            ) : (
                                users?.role === 'instructor' ? (
                                    <div id="instructorLayout">
                                        <li>
                                            <NavLink to="/dashboard/addclass">
                                                <BsFillJournalBookmarkFill /> Add Class
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/myclasses">
                                                <BsFillBookmarkStarFill /> My Class
                                            </NavLink>
                                        </li>
                                    </div>
                                ) : (
                                    <div id="studentLayout">
                                        <li>
                                            <NavLink to="/dashboard/coursecart">
                                                <BsFillJournalBookmarkFill /> Selected Course
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/courseenrolled">
                                                <BsFillBookmarkStarFill /> Enrolled Course
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/paymenthistory">
                                                <BsHouseDownFill /> Payment History
                                            </NavLink>
                                        </li>
                                    </div>
                                )
                            )}
                        </ul>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;
