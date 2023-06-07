import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Countdown from "../Countdown/Countdown";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Countdown></Countdown>
            <PopularClasses></PopularClasses>
            <Benefits></Benefits>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;