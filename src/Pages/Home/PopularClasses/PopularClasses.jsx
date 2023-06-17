import { useContext } from "react";
import CardsView from "../../../Components/CardsView/CardsView";
import Headings from "../../../Components/Headings/Headings";
import useClasses from "../../../Hooks/useClasses";
import { ThemeContext } from "../Home/Home";


const PopularClasses = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [classes] = useClasses();

    const popularClasses = classes.filter(popularClass => popularClass.numberOfStudents > 16);

    return (
        <div className="container mx-auto my-20">
            <Headings
                subHeading={"welcome to our summer camp"}
                heading={"Here is our Top Courses"}></Headings>
            <div className="grid md:grid-cols-3 gap-4 justify-items-center mx-auto">
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