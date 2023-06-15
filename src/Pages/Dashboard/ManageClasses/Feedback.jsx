import Headings from "../../../Components/Headings/Headings";


const Feedback = () => {
    return (
        <div className="text-center flex flex-col items-center mt-20">
            <Headings subHeading={"write the feedback here"} heading={"Feedback form"}></Headings>
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-lg mt-5" ></textarea>
            <input className="btn btn-primary my-5" type="submit" value="Submit" />
        </div>
    );
};

export default Feedback;