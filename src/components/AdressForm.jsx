import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

function AddressForm() {
  const { cartItems, updateEmail, removeItem  } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [customerEmail, setCustomerEmail] = useState("");
  const navigate = useNavigate();

  const handleClearCart = () => {
    cartItems.forEach(item => removeItem(item.id));
};

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price * item.quantity), 0);
  };

  const total = calculateTotal();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEmail(customerEmail);
    handleClearCart()
    navigate("/validation");
  };

  const handleChangeEmail = (event) => {
    setCustomerEmail(event.target.value);
  }

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className='fw-semibold'>Payment details</h5>
      <p>Complete your purchase by providing your payment details.</p>
      <h5 className='fw-semibold'>Shipping address</h5>
      <div className="row">
        <div className="col-md-6">
          <TextInput id="formFirstName" label="First name" placeholder="Enter your first name" />
        </div>
        <div className="col-md-6">
          <TextInput id="formLastName" label="Last name" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <TextInput 
            id="formEmail" 
            type="email" 
            label="Email address" 
            placeholder="Enter your email address" 
            value={customerEmail} 
            onChange={handleChangeEmail} 
          />
        </div>
        <div className="col-md-6">
          <TextInput id="formPhone" label="Phone number" placeholder="Enter your phone number" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <TextInput id="formAddress" label="Address" placeholder="Enter your address" />
        </div>
        <div className="col-md-6">
          <TextInput id="formCity" label="City" placeholder="City" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <SelectInput 
            id="formRegion" 
            label="Region" 
            options={[
              { value: "1", label: "Région 1" },
              { value: "2", label: "Région 2" },
              { value: "3", label: "Region 3" },
            ]} 
          />
        </div>
        <div className="col-md-6">
          <TextInput id="formPostalCode" label="Postal code" placeholder="Enter your postal code" />
        </div>
      </div>

      <h5 className="pt-4">Select payment method</h5>
      <div className="d-flex mb-3">
        <button
          type="button"
          className={`btn border border-1 border-secondary-subtle py-3 me-3 w-100 text-start ${paymentMethod === 'card' ? 'shadow-lg' : ''}`}
          onClick={() => handlePaymentMethodChange('card')}
        >
          <img src="/assets/icons/credit.svg" alt="credit card" width={30} height={30} className="img-fluid" /> <br />
          <span className="text-black">Debit / Credit Card</span>
        </button>
        <button
          type="button"
          className={`btn border border-1 px-1 px-md-3 border-secondary-subtle py-3 me-3 w-100 text-start ${paymentMethod === 'bank' ? 'shadow-lg' : ''}`}
          onClick={() => handlePaymentMethodChange('bank')}
        >
          <img src="/assets/icons/bank.svg" alt="bank transfer" width={30} height={30} className="img-fluid" /> <br />
          <span className="text-black">{paymentMethod === 'bank' ? 'Account Number' : 'Virtual Account'}</span>
        </button>
      </div>
      <div className="row py-2">
        <div className="col-md-12">
          <TextInput 
            id="formCardNumber" 
            label={paymentMethod === 'bank' ? "Account number" : "Card number"} 
            placeholder={paymentMethod === 'bank' ? "Account number" : "Card number"} 
          />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-md-6">
          <TextInput id="formExpirationDate" label="Expiration date (MM/YY)" placeholder="Expiration date (MM/YY)" />
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <TextInput id="formSecurityCode" label="Security code" placeholder="Security code" />
        </div>
      </div>
      <div className="form-group mb-3">
        <input type="checkbox" className="form-check-input border border-1 border-black me-2 custom-radio" id="formShippingAsBilling" />
        <label className="form-check-label" htmlFor="formShippingAsBilling">
          Use shipping address as billing address
        </label>
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className={`btn btn-dark btn-lg w-75 rounded-pill fw-bolder ${total === 0 ? 'disabled' : ''}`} >
          Pay ${total}
          <img src="/assets/icons/arrow-right.svg" alt="arrow-right" className="ms-3 img-fluid" width={20} height={20} />
        </button>
      </div>
    </form>
  );
}

export default AddressForm;
