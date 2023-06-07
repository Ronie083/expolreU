import { FcGraduationCap, FcAssistant, FcFilm } from "react-icons/fc";

const Benefits = () => {
    return (
        <div className="hero min-h-screen bg-gray-900 text-white mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <p style={{ fontFamily: 'Pacifico, cursive' }} className="py-6">benefits you can get from us</p>
                    <h1 className="text-5xl font-bold">Why Choose Us!</h1>
                    <p className="py-6">Our photography course is designed to help you unlock your creative potential and develop a unique visual style. Through hands-on assignments, expert guidance, and constructive feedback, you&apos;ll learn how to capture breathtaking images that tell compelling stories and leave a lasting impact.</p>
                    <div className="flex justify-between">
                        <div className="border-3 p-10 text-center text-white bg-[#8B9232] rounded-2xl">
                            <FcGraduationCap className="mx-auto w-20 h-20 "></FcGraduationCap>
                            <h4>
                                Experienced <br /> and trustworthy
                            </h4>
                        </div>
                        <div className="border-3 p-10  text-center text-white bg-[#8B9232] rounded-2xl">
                            <FcAssistant className="mx-auto w-20 h-20 "></FcAssistant>
                            <h4>
                                Join a Supportive <br />  Community
                            </h4>
                        </div>
                        <div className="border-3 p-10 text-center text-white bg-[#8B9232] rounded-2xl">
                            <FcFilm className="mx-auto w-20 h-20 "></FcFilm>
                            <h4>
                                Master <br /> Technical Skills
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;