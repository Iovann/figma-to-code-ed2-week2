import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ClothesLike = ({ variant, title, id }) => {
    const navigate = useNavigate();

    if (!variant || !variant.id || !variant.image) {
        return null;
    }

    const productId = id.split('/').pop();
    const handleCardClick = () => {
        navigate(`/clothes/${productId}`);
    };

    return (
        <div className="col-lg-3 col-md-6 col-11 rounded-5 d-flex flex-column align-items-center p-3 clothes-card-container" style={{ cursor: 'pointer' }} onClick={handleCardClick}>
            <div className="rounded-5 w-100 d-flex flex-column clothes-card" style={{ backgroundImage: `url(${variant.image.url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '405px', width: '322px' }}>
                <button className="btn btn-light rounded-pill text-uppercase fw-semibold mt-2 align-self-start m-4 cta-buttons d-none">
                    Get off 20%
                </button>
                <div className="d-flex justify-content-center mt-auto mb-3 gap-1">
                    <button className="btn btn-light ms-2 d-flex justify-content-center rounded-pill d-flex align-items-center fw-semibold cta-buttons d-none w-50">
                        <img src="/assets/icons/card.svg" className="img-fluid mx-1" alt="card" width={20} height={20} />
                        Add to cart
                    </button>
                    <button className="btn bg-transparent me-2 d-flex justify-content-center text-white buy fw-semibold border border-1 border-light rounded-pill text-uppercase buy cta-buttons d-none w-50">
                        BUY NOW
                    </button>
                </div>
            </div>
            <p className="text-uppercase fw-bold fs-5 mb-0 mt-3 align-self-start mx-3">{title}</p>
            <p className="text-uppercase fw-bold fs-5 text-secondary align-self-start mx-3">
                {variant.price.currencyCode} ${variant.price.amount}
            </p>
        </div>
    );
};

export default ClothesLike;
