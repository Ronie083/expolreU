

const Headings = ({heading, subHeading}) => {
    return (
        <div className="font-bold text-center">
            <p className="text-2xl" style={{ fontFamily: 'Pacifico, cursive' }}>{subHeading}</p>
            <h1 className="text-4xl my-3">{heading}</h1>
        </div>
    );
};

export default Headings;