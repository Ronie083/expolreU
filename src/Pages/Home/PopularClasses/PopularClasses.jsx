import CardsView from "../../../Components/CardsView/CardsView";
import useClasses from "../../../Hooks/useClasses";


const PopularClasses = () => {
    const [classes] = useClasses();

    const popularClasses = classes.filter(popularClass => popularClass.numberOfStudents > 16);

    return (
        <div className="container mx-auto my-20">
            <div className="font-bold text-center">
                <p className="text-2xl" style={{ fontFamily: 'Pacifico, cursive' }}>welcome to our summer camp</p>
                <h1 className="text-4xl my-3">Here is our Top Courses</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center mx-auto">
                {popularClasses.map(classItem => (
                    <CardsView key={classItem.id}
                        name={classItem.name}
                        instructor={classItem.instructor}
                        availableSeats={classItem.availableSeats}
                        price={classItem.price}
                        numberOfStudents={classItem.numberOfStudents}
                        image={classItem.image}
                        details={classItem.details}>
                    </CardsView>
                ))}
            </div>
            
        </div>
    );
};

export default PopularClasses;