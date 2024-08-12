import React from 'react'

const HeroSection = () => {
    return (
        <div className='hero rounded-5 my-5 main-content pt-0'>
            <div className="row justify-content-center py-lg-5 py-1">
                <div className="col-md-10 col-11 py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="divider border-bottom border-1 border-white"></span>
                                <p className="text-white mx-lg-3 mx-1 pt-3">We bring new fashion to the world</p>
                                <span className="divider border-bottom border-1 border-white"></span>
                            </div>
                        </div>

                        <div className="col-12 text-center"><h1 className="text-white display-5 fw-bold font-chillax">DISCOVER THE LATEST FASHION TRENDS HERE</h1></div>
                        <div className="col-lg-8 col-11 pt-2">
                            <p className="text-white text-center">Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.</p>
                        </div>
                        <div className="col-8 text-center pt-4">
                            <button className="btn btn-light px-3 fw-semibold rounded-pill">Start shopping</button>
                            <button className='btn btn-light rounded-circle p-2'>
                                <img src="/assets/icons/arrow.svg" className='img-fluid' alt="arrow" width={25} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection
