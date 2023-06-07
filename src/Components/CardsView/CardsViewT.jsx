import { useState } from "react";
import "./CardsView.css";


const CardsViewT = ({ image, name, email, numClassesTaken, classesTaken, numStudents, instructorQuotes }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className="card w-96 bg-base-100 shadow-xl my-10"
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
                    <div className="badge badge-secondary uppercase">Popular</div>
                </h2>
                <div className="instructor-info">
                    <p>Instructor Email: {email};</p>
                    <p className="my-3">Course: {classesTaken};</p>
                    <p>{instructorQuotes}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Number Of Students: {numStudents}</div>
                    <div className="badge badge-outline">Number Of Classes Taken: {numClassesTaken}</div>
                </div>
            </div>
        </div>
    );
};

export default CardsViewT;