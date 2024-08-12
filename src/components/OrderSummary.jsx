import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function OrderSummary() {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price * item.quantity), 0);
  };

  const total = calculateTotal()
  return (
    <div>
      <h4 className='fw-semibold'>Your Order</h4>
      <p>By placing your order, you agree to Ballamas <a href="#" className="text-black fw-semibold link-offset-2-hover">Privacy</a> and <a href="#" className="text-black fw-semibold link-offset-2-hover">Policy</a>.</p>
      <ul className="list-group list-group-flush">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item ps-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={item.imageUrl} className="rounded-3 img-fluid me-3" alt={item.name} width={72} height={72} />
                <div>
                  <p className="fw-bold mb-0">{item.title} ({item.quantity})</p>
                  <p className="mb-0">
                    {item.color &&
                      <span>Color: {item.color} - </span>
                    }

                    Size: {item.size}</p>
                </div>
              </div>
              <span className="fw-bold">${item.price * item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="row">
        <div className="col-lg-9">
          <p className="mb-0 pt-3 fw-semibold">Discount Code</p>
          <div className="form-group mt-1 d-flex align-items-center">
            <input type="text" className="form-control form-control-lg rounded-pill border border-1 border-black" placeholder="Add discount code" />
            <button className="btn btn-dark btn-lg mx-2 rounded-pill">Apply</button>
          </div>
        </div>
      </div>
      <p className="py-1">New customer? <a href="#" className="text-black fw-semibold link-offset-2-hover">Sign up</a></p>

      <div className="container">
        <div className='d-flex justify-content-between'> <span className='fw-semibold'>Subtotal</span>  <span>${calculateTotal()}</span></div>
        <div className='d-flex justify-content-between'> <span className='fw-semibold'>Discount</span> <span>$0</span></div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="fw-bold">Total payment</p>
          <p className="fw-bold">${calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
