import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFacebook, BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from 'react-icons/bs';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const { login, googleLogin, facebookLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                toast("Welcome!!! You Log-In Successfully",
                    {
                        position: "top-right",
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                        icon: "🚀"
                    });
            })
            .catch(() => {
                toast.error("Oops! Something went wrong. Please try again later.");
            })
        form.reset();
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1562463224-b42508db43a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80)" }}>
            <div className="hero-content my-10">
                <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <img className="max-w-full" src="https://images.unsplash.com/photo-1518353053542-7ea33d942319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
                        <div>
                            <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"} // Toggle between "text" and "password" type based on showPassword state
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <span
                                    className="absolute top-2 right-2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        // Show hide icon based on showPassword state
                                        <>
                                            <BsFillEyeSlashFill></BsFillEyeSlashFill>
                                        </>
                                    ) : (
                                        <>
                                            <BsFillEyeFill></BsFillEyeFill>
                                        </>
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <ToastContainer />
                        </div>
                        <div className="mt-5">
                            <p>Don&apos;t have account!!! <Link className="text-lg font-semibold link link-info" to="/register"> Click Here </Link> to register</p>
                        </div>
                        <div className="text-center">
                            <p className="my-5 text-xl font-bold">You can also login with</p>
                            <button onClick={handleLoginGoogle} className="btn btn-outline btn-error rounded-2xl"><BsGoogle></BsGoogle></button>
                            <button onClick={handleLoginFb} className="ml-3 btn btn-outline btn-info rounded-2xl"><BsFacebook></BsFacebook></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
