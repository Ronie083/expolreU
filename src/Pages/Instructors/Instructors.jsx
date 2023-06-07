import CardsViewT from "../../Components/CardsView/CardsViewT";
import Headings from "../../Components/Headings/Headings";
import useInstructors from "../../Hooks/useInstructors";

const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <div className="my-20">
            <Headings subHeading="here is the all of" heading="Our Instructors" />
                <div className="grid grid-cols-3 gap-5 justify-items-center">
                    {instructors.map((instructor) => (
                        <CardsViewT
                            key={instructor.id}
                            name={instructor.name}
                            image={instructor.image}
                            email={instructor.email}
                            numClassesTaken={instructor.numClassesTaken}
                            classesTaken={instructor.classesTaken}
                            numStudents={instructor.numStudents}
                            instructorQuotes={instructor.instructorQuotes}
                        />
                    ))}
                </div>
        </div>
    );
};

export default Instructors;
