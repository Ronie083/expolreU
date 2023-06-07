import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import SideNav from "../Pages/Shared/SideNav/SideNav";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <SideNav></SideNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;