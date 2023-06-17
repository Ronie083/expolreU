import { useContext } from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "../Home/Home";


const Countdown = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [countdown, setCountdown] = useState({
        days: 15,
        hours: 10,
        minutes: 24,
        seconds: 54
    });

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => {
                // Decrease the countdown values by 1 second
                const updatedCountdown = {
                    days: prevCountdown.days,
                    hours: prevCountdown.hours,
                    minutes: prevCountdown.minutes,
                    seconds: prevCountdown.seconds - 1
                };

                // Handle countdown reaching zero for each unit
                if (updatedCountdown.seconds < 0) {
                    updatedCountdown.seconds = 59;
                    updatedCountdown.minutes -= 1;
                }
                if (updatedCountdown.minutes < 0) {
                    updatedCountdown.minutes = 59;
                    updatedCountdown.hours -= 1;
                }
                if (updatedCountdown.hours < 0) {
                    updatedCountdown.hours = 23;
                    updatedCountdown.days -= 1;
                }

                // Check if countdown is completed
                if (updatedCountdown.days === 0 && updatedCountdown.hours === 0 && updatedCountdown.minutes === 0 && updatedCountdown.seconds === 0) {
                    clearInterval(countdownInterval);
                }

                return updatedCountdown;
            });
        }, 1000); // Update countdown every 1 second

        // Clean up the interval when the component is unmounted
        return () => {
            clearInterval(countdownInterval);
        };
    }, []);
    return (
        <div className="md:flex md:justify-between md:items-center px-20 md:px-36 bg-[#8B9232] py-10">
            <div className="font-bold">
                <p style={{ fontFamily: 'Pacifico, cursive' }}>until first session</p>
                <h1 className="text-3xl my-3">Don&apos;t Miss the First Day!</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": countdown.days }}></span>
                    </span>
                    <hr />
                    Days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": countdown.hours }}></span>
                    </span>
                    <hr />
                    Hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": countdown.minutes }}></span>
                    </span>
                    <hr />
                    Minutes
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": countdown.seconds }}></span>
                    </span>
                    <hr />
                    Seconds
                </div>
            </div>
        </div>
    );
};

export default Countdown;