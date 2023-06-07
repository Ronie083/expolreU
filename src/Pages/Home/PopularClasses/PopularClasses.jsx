import useClasses from "../../../Hooks/useClasses";


const PopularClasses = () => {
    const [classes] = useClasses();

    const popularClasses = classes.filter(popularClass => popularClass.numberOfStudents > 16);

    return (
        <div>
            classes
            {popularClasses.map(classItem => (
                <div key={classItem.id}>
                    <img src={classItem.image} alt={classItem.name} />
                    <h2>{classItem.name}</h2>
                    <p>Instructor: {classItem.instructor}</p>
                    <p>Available Seats: {classItem.availableSeats}</p>
                    <p>Price: {classItem.price}</p>
                    <p>Number of Students: {classItem.numberOfStudents}</p>
                </div>
            ))}
        </div>
    );
};

export default PopularClasses;