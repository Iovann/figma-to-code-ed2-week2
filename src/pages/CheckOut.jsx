import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddressForm from '../components/AdressForm';
import OrderSummary from '../components/OrderSummary';
import ShippingMethod from '../components/ShippingMethod';

function CheckOut() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className='fw-bold mb-5'>Checkout</h2>
        <div className="row gx-lg-5">
          <div className="col-lg-7 pe-0 pe-lg-5">
            <OrderSummary />
            <ShippingMethod />
          </div>
          <div className="col-lg-5">
            <AddressForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
