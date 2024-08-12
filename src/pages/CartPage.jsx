import React, { useCallback, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, removeItem, updateItemQuantity } = useContext(CartContext);
    const navigate = useNavigate()

    const [quantities, setQuantities] = useState(() => {
        return cartItems.reduce((acc, item) => {
            acc[item.id] = item.quantity || 1;
            return acc;
        }, {});
    });

    const [total, setTotal] = useState(0);

    const handleQuantityChange = useCallback((id, quantity) => {
        console.log(`Updating quantity for item ${id} to ${quantity}`);
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: quantity
        }));
        updateItemQuantity(id, quantity);
    }, [updateItemQuantity]);

    useEffect(() => {
        const newTotal = cartItems.reduce((acc, item) => {
            return acc + item.price * (quantities[item.id] || 1);
        }, 0);
        setTotal(newTotal);
    }, [cartItems, quantities]);

    const handleClearCart = () => {
        cartItems.forEach(item => removeItem(item.id));
    };


    const handleCheckOut = () => {
        navigate("/payement")
    }
    useEffect(() => {
        navigate("/cart")
    }, [cartItems]);

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Navbar />
            <section className="container py-5 main-content">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="d-flex justify-content-between">
                            <h2 className='fs-3 fw-bold font-chillax'>Cart ({cartItemCount})</h2>
                            <button className='btn bg-secondary-subtle rounded-4' onClick={handleClearCart}>
                                <img src="/assets/icons/trash.svg" width={14} height={14} className='img-fluid' alt="trash" />
                                <span className="mx-1 text-secondary">Clear Cart</span>
                            </button>
                        </div>

                        <table className="table container">
                            <tbody>
                                <tr>
                                    <td className="w-65 fw-lighter">Product</td>
                                    <td className="fw-lighter">Quantity</td>
                                    <td className="fw-lighter">Price</td>
                                </tr>
                                {cartItems.length == 0 &&
                                    <p className='text-center fw-bold py-5 fs-5'> Your Cart is empty</p>
                                }
                                {cartItems.length != 0 &&
                                    cartItems.map(item => (
                                        <CartItem
                                            key={item.key}
                                            id={item.id}
                                            imageUrl={item.imageUrl}
                                            title={item.title}
                                            color={item.color}
                                            size={item.size}
                                            price={item.price}
                                            quantity={quantities[item.id]}
                                            onQuantityChange={handleQuantityChange}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="p-3 shadow-sm rounded-3 border border-1 border-secondary-subtle">
                            <h4 className='fw-bold'>Order summary</h4>
                            <div className="d-flex justify-content-between">
                                <p className='fw-light'>Subtotal</p>
                                <p className='fw-light'>${total.toFixed(2)}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className='fw-light'>Discount</p>
                                <p className='fw-light ms-3'>$0</p>
                            </div>
                            <div className="border-bottom border-1 border-black mb-2"></div>

                            <div className="d-flex justify-content-between">
                                <p className='fw-bold'>Order total</p>
                                <p className='fw-bold ms-3'>${total.toFixed(2)}</p>
                            </div>

                            <button className='btn btn-dark w-100 fw-bold rounded-pill' onClick={handleCheckOut}>Checkout now</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CartPage;
