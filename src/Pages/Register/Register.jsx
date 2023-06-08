import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";


const Register = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const gender = form.gender.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;
        const password = form.password.value;

        console.log(email, name, photoUrl, gender, phoneNumber, address, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1614849427248-287c4e88ef58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)" }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink- text-center w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body max-h-[600px]">
                        <h1 className="text-4xl font-bold mb-3">Sign Up now!</h1>
                        <img className="max-h-[350px]" src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" />
                        <div className="text-center">
                            <p className="my-2 text-lg font-bold">You can also Sign Up with</p>
                            <button className="btn btn-outline btn-error rounded-full"><BsGoogle></BsGoogle></button>
                            <button className="ml-3 btn btn-outline btn-info rounded-full"><BsFacebook></BsFacebook></button>
                        </div>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className=" grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <input type="text" name="gender" placeholder="gender" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name="phoneNumber" placeholder="phone number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="address" className="input input-bordered" />
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control col-span-2 mb-6">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                        <div className="my-2">
                            <p>Already have an account!!! <Link className="text-lg font-semibold link link-info" to="/login">Login</Link> from here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;