import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import "./CheckoutForm.css"; // Import your custom CSS styles
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    useEffect(() => {
        if (!price || !token){
            return
        }
        const fetchPaymentIntent = async () => {
            try {
                const response = await axios.post('http://localhost:5000/create-payment-intent', { price },{
                    headers: {Authorization: `Bearer ${token}`}
                });
                const data = response.data;
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Error creating payment intent:', error);
            }
        };

        fetchPaymentIntent();
    }, [price, token]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('error', error)
        }
        else {
            console.log('payment method', paymentMethod)
        }

        const { paymentIntend, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'unknown',
                    email: user?.email || 'unknown'
                },
            },
        },
        );

        if(confirmError){
            console.log(confirmError);
        }

        console.log(paymentIntend)
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Checkout Form</h1>
            </div>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Card Details</label>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "#aab7c4",
                                        },
                                    },
                                    invalid: {
                                        color: "#9e2146",
                                    },
                                },
                            }}
                        />
                    </div>
                    <button type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
