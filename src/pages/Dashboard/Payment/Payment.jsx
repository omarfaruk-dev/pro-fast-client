import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

// const stripePromise = loadStripe('pk_test_51O1zqKI3eoEkdkDAsfFzOwsxRNrULNomLdksUJnokcloZvHXW4esKvhwNTYdi2FgdiwhfyYl1PCD1UCATQxk2tnJ00AOD4h8XN')
const stripePromise = loadStripe(import.meta.env.VITE_payment_Key)

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm></PaymentForm>
        </Elements>
    );
};

export default Payment;