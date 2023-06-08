import CardsViewT from "../../Components/CardsView/CardsViewT";
import Headings from "../../Components/Headings/Headings";
import useInstructors from "../../Hooks/useInstructors";

const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <div className="my-20">
            <Headings
                subHeading="here is the all of"
                heading="Our Instructors" />
            <div className="grid md:grid-cols-3">
                <div className="text-center md:text-left p-2">
                    <h3 className="text-3xl" style={{ fontFamily: 'Pacifico, cursive' }}>meet our expert instructors</h3>
                    <p className="text-lg my-3"> Our photography course instructors are seasoned professionals with a wealth of experience in the industry. They bring a diverse range of expertise, from portrait photography to landscape photography, fashion photography to documentary photography. With their guidance, you&apos;ll receive invaluable insights, personalized feedback, and insider tips to elevate your skills to new heights.</p>
                </div>
                <div className="grid md:grid-cols-2 md:col-span-2 justify-items-center">
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
        </div>
    );
};

export default Instructors;
