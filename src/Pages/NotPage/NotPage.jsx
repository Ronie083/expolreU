import { Link } from "react-router-dom";


const NotPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1686224227995-00e04eea2ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center max-w-xl">
                <div className="text-white">
                    <h1 className="text-5xl font-bold">404 PAGE NOT FOUND</h1>
                    <p className="py-6">Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
                    <p>Don&apos;t be alone here for too!!!</p>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotPage;