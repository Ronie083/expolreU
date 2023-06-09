import { Link } from "react-router-dom";
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";



const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="mt-5">
                            <p>Don&apos;t have account!!! <Link className="text-lg font-semibold link link-info" to="/register"> Click Here </Link> to register</p>
                        </div>
                        <div className="text-center">
                            <p className="my-5 text-xl font-bold">You can also login with</p>
                            <button className="btn btn-outline btn-error rounded-full"><BsGoogle></BsGoogle></button>
                            <button className="ml-3 btn btn-outline btn-info rounded-full"><BsFacebook></BsFacebook></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
