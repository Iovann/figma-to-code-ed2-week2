import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const Validation = () => {
    const { email } = useCart();

    return (
        <>
            <Navbar />
            <div className="validate d-flex justify-content-center align-items-center flex-column">
                <img src="/assets/icons/check.svg" alt="check" width={100} height={100} className='img-fluid' />
                <p className='text-center fw-bold mb-1 mt-2'>Thanks for your order!</p>
                <p className='text-center'>The order confirmation has been sent to {email}</p>
            </div>
            <Footer />
        </>
    );
}

export default Validation;
