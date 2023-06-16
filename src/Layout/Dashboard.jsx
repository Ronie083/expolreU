import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { BsClipboard2PlusFill, BsFillBookmarkStarFill, BsFillJournalBookmarkFill, BsHouseDownFill, BsPersonFillGear } from "react-icons/bs";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const mail = user.email;
    
    const { data: dbUsers = [] } = useQuery(['user'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });

    const dbUserMail = dbUsers.filter((dbUser) => dbUser.email === mail);

    console.log(dbUserMail)
    
    const isAdmin = dbUserMail[0]?.role === 'admin';
    const isInstructor = dbUserMail[0]?.role === 'instructor';
    

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
                            {
                                isAdmin ? (
                                    <div id="adminLayout">
                                        <li><NavLink to={"/dashboard/manageclasses"}><BsClipboard2PlusFill></BsClipboard2PlusFill> Manage Classes</NavLink></li>
                                        <li><NavLink to={"/dashboard/manageuser"}><BsPersonFillGear></BsPersonFillGear> Manage Users</NavLink></li>
                                    </div>
                                ) : (
                                    isInstructor ? (
                                        <div id="instructorLayout">
                                            <li><NavLink to={"/dashboard/addclass"}><BsFillJournalBookmarkFill></BsFillJournalBookmarkFill>Add Class</NavLink></li>
                                            <li><NavLink to={"/dashboard/myclasses"}><BsFillBookmarkStarFill></BsFillBookmarkStarFill>My Class</NavLink></li>
                                        </div>
                                    ) : (
                                        <div id="studentLayout">
                                            <li><NavLink to={"/dashboard/coursecart"}><BsFillJournalBookmarkFill></BsFillJournalBookmarkFill>Selected Course</NavLink></li>
                                            <li><NavLink to={"/dashboard/courseenrolled"}><BsFillBookmarkStarFill></BsFillBookmarkStarFill>Enrolled Course</NavLink></li>
                                            <li><NavLink to={"/dashboard/paymenthistory"}><BsHouseDownFill></BsHouseDownFill>Payment History</NavLink></li>
                                        </div>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;
