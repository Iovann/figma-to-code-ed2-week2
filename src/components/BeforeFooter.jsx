import React from 'react';

const BeforeFooter = () => {
    return (
        <div className="row py-5 justify-content-lg-between justify-content-center">
            <div className="col-lg-4 col-md-6 col-10 rounded-5 d-flex flex-column align-items-center">
                <div className="rounded-5 w-100 d-flex flex-column justify-content-end" style={{ backgroundImage: `url('/assets/images/befooterone.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '446px', width: '305px' }}>
                    <div className="d-flex justify-content-center w-100">
                        <button className="btn btn-light rounded-pill text-uppercase my-4 d-flex align-items-center">
                            Learn More
                            <img src="/assets/icons/arrow.svg" className="img-fluid mx-2" alt="arrow" width={25} height={20}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-md-6 col-10 classic-men rounded-5 d-flex flex-column align-items-center justify-content-center lh-sm mt-3 mt-md-0">
                <h2 className="text-center text-white classic-custom display-3 fw-bold mb-0">CLASSIC MEN</h2>
                <p className="text-white fw-bold fs-5 text-center">We’re changing the way things get made</p>
            </div>
        </div>
    );
}

export default BeforeFooter;
