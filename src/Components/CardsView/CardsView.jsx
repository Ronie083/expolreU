import { useState } from "react";
import "./CardsView.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardsView = ({ image, name, instructor, availableSeats, price, numberOfStudents, details }) => {
    const [hovered, setHovered] = useState(false);
    const { user } = useContext(AuthContext);

    const isUserLoggedIn = !!user;

    const enrollButton = availableSeats > 0 && !isUserLoggedIn ? "btn btn-outline bg-red-300" : "btn btn-outline";

    const handleEnroll = () => {
        if (!isUserLoggedIn) {
            toast.error("Please log in to enroll.");
        } else {
            // Perform the enrollment logic
        }
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const cardClass = availableSeats === 0 ? "card no-seats" : "card";

    return (
        <div
            className={`${cardClass} w-96 bg-base-100 shadow-xl my-10`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="image-wrapper">
                <figure style={{ height: '300px', overflow: 'hidden' }}>
                    <img src={image} alt="image" />
                </figure>
            </div>
            <div className={`card-body ${hovered ? 'hovered' : ''}`}>
                <h2 className="card-title">
                    {name}
                    {
                        numberOfStudents > 16 && (
                            <div className="badge badge-secondary uppercase">Popular</div>
                        )
                    }
                </h2>
                <div className="instructor-info">
                    <p>Instructor: {instructor}</p>
                    <p className="my-3">Number Of Students: {numberOfStudents}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Price: ${price}</div>
                    <div className="badge badge-outline">Available Seats: {availableSeats}</div>
                </div>
            </div>
            <div className="card-actions m-10">
                <button className={enrollButton} onClick={handleEnroll}>Enroll</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CardsView;
