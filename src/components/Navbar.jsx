import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [state, setState] = useState(true);
    const { cartItems } = useCart();
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleClick = () => {
        setState(prevStatus => !prevStatus);
    };

    return (
        <>
            <div className="text-white bg-dark py-2 fixed-top text-center fw-semibold">Sign up and get 20% off for all new arrivals collections</div>
            <nav className="navbar navbar-expand-xl fixed bg-light">
                <div className="container d-flex justify-content-center align-items-center d-none d-xl-flex border-bottom border-1 border-secondary-subtle">
                    <ul className="navbar-nav flex-row order-1 order-xl-0 d-none d-xl-flex me-5">
                        <li className="nav-item"><a className="nav-link mx-2" href="#">Men</a></li>
                        <li className="nav-item"><a className="nav-link mx-2" href="#">Women</a></li>
                        <li className="nav-item"><a className="nav-link mx-2" href="#">Kids</a></li>
                        <li className="nav-item"><a className="nav-link mx-2" href="#">Collection</a></li>
                    </ul>

                    <Link to={"/"} className="navbar-brand mx-auto order-0 fs-1" href="#">BALLAMAS</Link>

                    <ul className="navbar-nav flex-row order-2 order-xl-0 d-none d-xl-flex ms-5">
                        <li className="nav-item"><a className="nav-link mx-2" href="#">Shop</a></li>
                        <li className="nav-item"><a className="nav-link mx-2" href="#">About Us</a></li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#">
                                <span><img src="/assets/icons/profile.svg" className='img-fluid mx-1' width={18} height={18} alt="avatar" /> Account</span>
                            </a>
                        </li>
                        <li className="nav-item"><Link to={"/cart"} className="nav-link mx-2" href="#">Cart({cartItemCount})</Link></li>
                        <li className="nav-item"><a className="nav-link mx-2" href="#"><img src="/assets/icons/search.svg" className='img-fluid' width={20} height={20} alt="search icons" /></a></li>
                    </ul>
                </div>

                <div className="container d-flex d-xl-none align-items-center container">
                    <button className="navbar-toggler" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            state ? <span className=""><img src="/assets/icons/hambuger-menu.svg" alt="Menu" width={20} height={20} /></span> : <span className=""><img src="/assets/icons/close.svg" alt="Close" width={20} height={20} /></span>
                        }
                    </button>
                    <Link to={"/"} className="navbar-brand fs-1" href="#">BALLAMAS</Link>
                    <ul className='navbar-bar d-flex gx-3 list-unstyled align-items-center pt-3'>
                        <li className="mav-item mx-2 position-relative">
                            <Link className='nav-link' to={"/cart"}>
                                <img src="/assets/icons/card.svg" alt="card icons" className='img-fluid' width={20} height={20} />
                                {cartItemCount > 0 && (
                                    <span className="badge bg-black rounded-circle position-absolute top-0 start-100 translate-middle">
                                        {cartItemCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li className="mav-item mx-2">
                            <img src="/assets/icons/search.svg" alt="search icons" className='img-fluid' width={20} height={20} />
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex flex-column text-center">
                            <li className="nav-item"><a className="nav-link mx-2" href="#">Men</a></li>
                            <li className="nav-item"><a className="nav-link mx-2" href="#">Women</a></li>
                            <li className="nav-item"><a className="nav-link mx-2" href="#">Kids</a></li>
                            <li className="nav-item"><a className="nav-link mx-2" href="#">Collection</a></li>
                            <li className="nav-item"><a className="nav-link mx-2" href="#">Shop</a></li>
                            <li className="nav-item"><a className="nav-link mx-2" href="#">About Us</a></li>
                            <li className="nav-item"><a className="nav-link mx-2" href="#"><img src="/assets/icons/profile.svg" className='img-fluid mx-1' width={18} height={18} alt="avatar" /> Account</a></li>
                            <li className="nav-item"><a className="nav-link mx-2 pt-4" href="#">FAQ</a></li>
                            <li className="nav-item"><a className="nav-link mx-2" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
