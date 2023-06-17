import { createContext } from "react";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Countdown from "../Countdown/Countdown";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import { useState } from "react";
import "./Home.css"
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const Home = () => {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <div id="toggleSwitch">
                    <label>{theme === "light" ? "Light mode" : "Dark mode"}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
                </div>
                <Banner></Banner>
                <Countdown></Countdown>
                <div id="makeWhite">
                    <PopularClasses></PopularClasses>
                </div>
                <Benefits></Benefits>
                <div id="makeWhite">
                    <PopularInstructor></PopularInstructor>
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default Home;