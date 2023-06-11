import { useContext, useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const { createUser, googleLogin, facebookLogin } = useContext(AuthContext);
    const [passwordAlert, setPasswordAlert] = useState("");
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


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

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordAlert(
                "Password must contain at least one capital letter, one special characters, and be at least 6 characters long."
            );
            return;
        }

        console.log(gender, phoneNumber, address);

        createUser(email, password, name, photoUrl)
            .then(result => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrl,
                })
                    .then(() => {
                        const saveUser ={ email, name, photoUrl}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    toast("Wow! You Sign-Up successfully",
                                        {
                                            position: "top-right",
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            theme: "dark",
                                            icon: <FcPlus></FcPlus>
                                        });
                                    navigate("/")
                                }
                            })
                    })
                console.log(user);
            })
            .catch(error => toast(error.message));
        form.reset();
    };

    const handleLoginGoogle = () => {
        googleLogin();
        navigate(from, { replace: true });
    };

    const handleLoginFb = () => {
        facebookLogin();
        navigate(from, { replace: true });
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
                            <hr className="my-3" />
                            <button onClick={handleLoginGoogle} className="btn btn-outline btn-error rounded-2xl"><BsGoogle></BsGoogle></button>
                            <button onClick={handleLoginFb} className="ml-3 btn btn-outline btn-info rounded-2xl"><BsFacebook></BsFacebook></button>
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
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <input type="text" name="gender" placeholder="gender" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="tel" name="phoneNumber" placeholder="phone number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="address" className="input input-bordered" required />
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <p>{passwordAlert}</p>
                            </div>
                            <div className="form-control col-span-2 mb-6">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                            <ToastContainer />
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