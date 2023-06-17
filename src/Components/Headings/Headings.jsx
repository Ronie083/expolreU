import { useContext } from "react";
import { ThemeContext } from "../../Pages/Home/Home/Home";


const Headings = ({heading, subHeading}) => {
    
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className="font-bold text-center">
            <h6 className="text-2xl" style={{ fontFamily: 'Pacifico, cursive' }}>{subHeading}</h6>
            <h5 className="text-4xl my-3">{heading}</h5>
        </div>
    );
};

export default Headings;