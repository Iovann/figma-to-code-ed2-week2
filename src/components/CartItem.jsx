import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, imageUrl, title, color, size, price, quantity, onQuantityChange }) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity || 1);
    const { removeItem } = useContext(CartContext);

    useEffect(() => {
        onQuantityChange(id, currentQuantity);
    }, [currentQuantity, id,]);

    const handleIncrement = () => {
        setCurrentQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setCurrentQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    const handleRemove = () => {
        removeItem(id);
    };

    const totalPrice = price * currentQuantity;

    return (
        <tr>
            <td className="w-65">
                <div className="d-flex align-items-center p-0">
                    <span
                        className='cart-image'
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: "cover",
                            width: "100px",
                            height: "100px"
                        }}
                    ></span>
                    <div className="ms-2">
                        <p className='mb-0 fw-bold text-truncate'>{title}</p>
                        <p className='mb-0 text-truncate'>
                            {color &&
                                <span>{color} -</span>
                            }

                            {!color &&
                                <span>Size : {size} </span>
                            }

                            {size && color &&
                                <span>{size}</span>
                            }

                        </p>
                        <p className='mb-0 fw-bold text-truncate'>${price}</p>
                    </div>
                </div>
            </td>
            <td className='px-0 px-md-2'>
                <div className="d-flex align-items-center pt-4">
                    <p className='bg-secondary-subtle px-xl-2 py-1 rounded-pill'>
                        <img src="/assets/icons/less.svg"
                            className='img-fluid increment'
                            alt="less"
                            width={20}
                            height={20}
                            onClick={handleDecrement}
                        />
                        <span className='mx-xl-3 mx-xxl-4 mx-1 fw-bold'>{currentQuantity}</span>
                        <img src="/assets/icons/add.svg"
                            className='img-fluid increment'
                            alt="add"
                            width={20}
                            height={20}
                            onClick={handleIncrement}
                        />
                    </p>

                    <span className='rounded-circle px-2 mb-3 mx-lg-2 py-1 bg-secondary-subtle'>
                        <img src="/assets/icons/trash.svg" alt="trash" width={20} height={20} className='img-fluid' onClick={handleRemove} />
                    </span>
                </div>
            </td>
            <td className='w-15'>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <p className='fw-bold mb-0'>${totalPrice}</p>
                </div>
            </td>
        </tr>
    );
};

export default CartItem;
