import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../Components/CheckoutForm/CheckoutForm";
import { useLocation } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
    const location = useLocation();
    const coursCart = location.state;
    const paymentAmount = coursCart.coursCart.price;
    console.log(coursCart)
    
    return (
        <div>
            <h1>Payment:{paymentAmount}</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={paymentAmount}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
