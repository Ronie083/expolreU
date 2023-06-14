import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useEnrollCart from "../../../Hooks/useEnrollCart";


const AddClass = () => {

    const { user } = useContext(AuthContext);
    // console.log(user)
    const [, refetch] = useEnrollCart();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const course = form.course.value;
        const photoURL = form.photoUrl.value;
        const price = form.price.value;
        const availableSeat = form.availableSeat.value

        console.log(name, email, photoURL, price, availableSeat, course)

        const courseInfo = { newCourse: name, email, photoURL, availableSeat, course, courseStatus: "pending" }
        fetch('http://localhost:5000/newCourse', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(courseInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Your course successfully added to cart")
                    refetch();
                }
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink- text-center w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body max-h-[600px]">
                        <h1 className="text-4xl font-bold mb-3">Add Your New Class</h1>
                        <div className="text-center">
                            <p className="my-2 text-lg font-bold">Admin will Approve Your class</p>
                        </div>
                    </div>
                    <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className=" grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Class Name</span>
                                    </label>
                                    <input type="text" name="course" placeholder="class name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user.email} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="your name" className="input input-bordered" defaultValue={user.displayName} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoUrl" placeholder="photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Seat</span>
                                    </label>
                                    <input type="text" name="availableSeat" placeholder="available seat" className="input input-bordered" required />
                                </div>
                                <div className="form-control col-span-2 mb-6">
                                    <input className="btn btn-primary" type="submit" value="Submit" />
                                </div>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;