import useClasses from '../../Hooks/useClasses';
import Headings from '../../Components/Headings/Headings';
import CardsView from '../../Components/CardsView/CardsView';

const Classes = () => {
    const [classes] = useClasses();
    return (
        <div className='my-20'>
            <Headings
                subHeading={'here is the all of'}
                heading={"Our Courses"}></Headings>
            <div className='grid md:grid-cols-3 gap-5 justify-items-center'>
                {
                    classes.map(course => <CardsView key={course.id}
                        image={course.image}
                        name={course.name}
                        instructor={course.instructor}
                        availableSeats={course.availableSeats}
                        price={course.price}
                        numberOfStudents={course.numberOfStudents}
                        details={course.details}></CardsView>)
                }
            </div>
        </div>
    );
};

export default Classes;