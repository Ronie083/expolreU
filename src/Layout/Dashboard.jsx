import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { BsClipboard2PlusFill, BsFillBookmarkStarFill, BsFillJournalBookmarkFill, BsHouseDownFill, BsPersonFillGear } from "react-icons/bs";
import Footer from "../Pages/Shared/Footer/Footer";


const Dashboard = () => {

    const isAdmin = true;

    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {
                                isAdmin ? <>
                                    <li><NavLink to={"/dashboard/dashclasses"}><BsClipboard2PlusFill></BsClipboard2PlusFill> Manage Classes</NavLink></li>
                                    <li><NavLink to={"/dashboard/manageuser"}><BsPersonFillGear></BsPersonFillGear> Manage Users</NavLink></li>
                                </> : <>
                                    <li><NavLink to={"/dashboard/coursecart"}><BsFillJournalBookmarkFill></BsFillJournalBookmarkFill>Selected Course</NavLink></li>
                                    <li><NavLink to={"/dashboard/coursecart"}><BsFillBookmarkStarFill></BsFillBookmarkStarFill>Enrolled Course</NavLink></li>
                                    <li><NavLink to={"/dashboard/payment"}><BsHouseDownFill></BsHouseDownFill>Payment History</NavLink></li>
                                </>
                            }

                        </ul>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Dashboard;