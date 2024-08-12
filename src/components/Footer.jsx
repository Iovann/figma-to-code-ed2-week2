import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="">
                <footer className="bg-black">
                    <div className="container p-4">
                        <div className="row text-white py-5 justify-content-between">
                            <div className="col-lg-5 col-md-9 mb-4 mb-md-0">
                                <h5 className="text-custom fs-1">BALLAMAS</h5>
                                <p className='text-white'>
                                    Subscribe to our newsletter  for upcoming products and best discount for all items
                                </p>
                                <div className="d-flex justify-content-center">
                                    <input type="email" className='form-control rounded-pill w-75 bg-black text-gray newsletter' placeholder='Your email' />
                                    <button className='btn btn-light rounded-pill w-25 mx-2 fw-semibold'>Subscribe</button>
                                </div>
                            </div>

                            <div className="col-lg-6 d-flex justify-content-lg-end gap-3 pt-2 pt-md-4 pt-lg-0">
                                <div className="col-md-2 mb-4 mb-md-0">
                                    <h5 className=" text-capitalize">Product</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-gray">Jacket</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">T-Shirt</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">Jacket</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">Shoes</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">Sunglasses</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-2 mb-4 mb-md-0">
                                    <h5 className="text-capitalize">Categories</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-gray">Man</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">Woman</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">Kids</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">Gift</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">New arrival</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-4 mb-4 mb-md-0">
                                    <h5 className="text-capitalize">Our Social Media</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-gray">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">Youtube</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-gray">X</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-center text-gray pt-5 mb-0">© BALLAMAS 2024 by waris</p>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer
