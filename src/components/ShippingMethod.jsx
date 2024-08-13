import React, { useState } from 'react';

function ShippingMethod() {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.id);
  };

  return (
    <div className='py-3 container'>
      <h4 className='fw-semibold'>Shipping method</h4>
      <div className="d-flex flex-column gap-2">
        <div className={`form-check border border-1 py-3 rounded-4 ${selectedMethod === 'expressShipping1' ? 'shadow-sm border-2' : ''}`}>
          <input 
            className="form-check-input mx-2 mt-3 custom-radio" 
            type="radio" 
            id="expressShipping1" 
            name="shippingMethod"
            onChange={handleMethodChange} 
          />
          <label 
            className="form-check-label d-flex justify-content-between align-items-center" 
            htmlFor="expressShipping1"
          >
            <div className="">
              <span className='fw-bold'>Free shipping</span> <br />
              <span>7-30 business days</span>
            </div>
            <div className='fw-bold mx-2'>
              $0
            </div>
          </label>
        </div>
        <div className={`form-check border border-1 py-3 rounded-4 ${selectedMethod === 'expressShipping2' ? 'shadow-sm border-2' : ''}`}>
          <input 
            className="form-check-input mx-2 mt-3 custom-radio" 
            type="radio" 
            id="expressShipping2" 
            name="shippingMethod"
            onChange={handleMethodChange} 
          />
          <label 
            className="form-check-label d-flex justify-content-between align-items-center" 
            htmlFor="expressShipping2"
          >
            <div className="">
              <span className='fw-bold'>Regular shipping</span> <br />
              <span>3-14 business days</span>
            </div>
            <div className='fw-bold mx-2'>
              $7.50
            </div>
          </label>
        </div>
        <div className={`form-check border border-1 py-3 rounded-4 ${selectedMethod === 'expressShipping3' ? 'shadow-sm border-2' : ''}`}>
          <input 
            className="form-check-input mx-2 mt-3 custom-radio" 
            type="radio" 
            id="expressShipping3" 
            name="shippingMethod"
            onChange={handleMethodChange} 
          />
          <label 
            className="form-check-label d-flex justify-content-between align-items-center" 
            htmlFor="expressShipping3"
          >
            <div className="">
              <span className='fw-bold'>Express shipping</span> <br />
              <span>1-3 business days</span>
            </div>
            <div className='fw-bold mx-2'>
              $22.50
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ShippingMethod;
