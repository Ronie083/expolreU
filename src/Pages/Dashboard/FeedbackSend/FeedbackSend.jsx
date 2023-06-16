import { useLocation } from "react-router-dom";
import Headings from "../../../Components/Headings/Headings";
import { ToastContainer, toast } from "react-toastify";


const FeedbackSend = () => {
    const location = useLocation()
    const newClass = location.state
    const id = newClass.newClass._id

    const handleFeedback = (event) => {
        event.preventDefault();
        const textarea = event.target;
        const feedback = textarea.feedback.value;

        console.log(feedback);

        fetch(`http://localhost:5000/newCourse/${id}/feedback`, {
            method: "PATCH",
            body: JSON.stringify({ feedback }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success("Feedback sent successfully");
                } else {
                    toast.error("Failed to send feedback");
                }
            });
    };


    return (
        <div className="text-center flex flex-col items-center mt-20">
            <Headings subHeading={"write the feedback here"} heading={"Feedback form"}></Headings>
            <form onSubmit={handleFeedback}>
                <textarea
                    placeholder="Bio"
                    name="feedback"
                    type="text"
                    className="textarea textarea-bordered textarea-lg w-full max-w-lg mt-5"
                />
                <input className="btn btn-primary my-5" type="submit" value="Submit" />
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default FeedbackSend;