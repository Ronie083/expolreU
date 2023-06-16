import { useQuery } from "@tanstack/react-query";
import Headings from "../../../Components/Headings/Headings";


const MyClasses = () => {
    const { data: newClasses = [] } = useQuery(['newClasses'], async () => {
        const res = await fetch('http://localhost:5000/newCourse');
        return res.json();
    });

    console.log(newClasses)

    return (
        <div className="my-20">
            <Headings
                subHeading={"here is all the added"}
                heading={"Class by you"}></Headings>
            <div className=" grid grid-cols-2 gap-8 mx-10">
                {
                    newClasses.map(newClass => <div key={newClass._id} className="card w-96 shadow-xl bg-red-100 mt-5">
                        <div className="card-body">
                            <h2 className="card-title">{newClass.course}
                                <div className="badge badge-secondary">{newClass.courseStatus}</div></h2>
                            <p>
                                Total enrolled students:{" "}
                                {newClass.enrolledStudents > 0 ? newClass.enrolledStudents : 0}
                            </p>

                            <p hidden={newClass.courseStatus === 'Approved'}>{newClass.feedback}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                        <figure><img src={newClass.photoURL} alt="Shoes" /></figure>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyClasses;