import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { BsFillBookmarkStarFill, BsFillJournalBookmarkFill, BsHouseDownFill } from "react-icons/bs";
import Footer from "../Pages/Shared/Footer/Footer";


const Dashboard = () => {
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
                            <li><a><BsFillJournalBookmarkFill></BsFillJournalBookmarkFill>Selected Course</a></li>
                            <li><a><BsFillBookmarkStarFill></BsFillBookmarkStarFill>Enrolled Course</a></li>
                            <li><a><BsHouseDownFill></BsHouseDownFill>Payment History</a></li>

                        </ul>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;