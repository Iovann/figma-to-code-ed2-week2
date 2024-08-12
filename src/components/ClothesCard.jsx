import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ClothesCard = ({ product }) => {
    const { title, featuredImage, variants, id } = product;

    if (!variants || !variants.edges || variants.edges.length === 0) {
        console.error('No variants available for this product');
        return null;
    }

    const price = variants.edges[0].node.price;
    const productId = id.split('/').pop();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const handleCardClick = () => {
        navigate(`/clothes/${productId}`);
    };

    const handleAddToCart = () => {
        const variant = variants.edges[0].node;
        const titleParts = variant.title ? variant.title.split(' / ') : [];
        const size = titleParts[0] || 'N/A';
        const color = titleParts[1] || 'N/A';

        if (!addToCart) {
            console.error('addToCart function is not available');
            return;
        }

        const itemToAdd = {
            id: id,
            title: title,
            price: price.amount,
            currencyCode: price.currencyCode,
            imageUrl: featuredImage.url,
            size: size,
            color: color,
            quantity: 1,
        };

        addToCart(itemToAdd);
    };

    return (
        <div className="col-lg-4 col-md-6 col-11 rounded-5 d-flex flex-column align-items-center  p-3 ">
            <div className="rounded-5 w-100 d-flex flex-column clothes-card" onClick={handleCardClick} style={{ backgroundImage: `url(${featuredImage.url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '405px', width: '322px', }}>
                <button className="btn btn-light rounded-pill text-uppercase fw-semibold mt-2 align-self-start m-4 cta-buttons d-none">
                    Get off 20%
                </button>
                <div className="d-flex justify-content-center mt-auto mb-2 gap-lg-2 gap-1">
                    <button className="btn btn-light justify-content-center rounded-pill d-flex py-2 align-items-center fw-semibold cta-buttons d-none w-50 ms-lg-4 ms-2" >
                        <img src="/assets/icons/card.svg" className="img-fluid mx-1" alt="card" width={20} height={20} />
                        Add to cart
                    </button>
                    <button className="btn d-flex py-2 justify-content-center text-white border border-2 fw-bolder btn-bg  rounded-pill text-uppercase cta-buttons d-none w-50 me-lg-4 me-2">
                        BUY NOW
                    </button>
                </div>
            </div>
            <p className="text-uppercase fw-bold fs-4 mb-0 mt-3 align-self-start mx-3">{title}</p>
            <p className="text-uppercase fw-bold fs-4 text-secondary align-self-start mx-3">
                {price.amount} {price.currencyCode}
            </p>
        </div>
    );
};

export default ClothesCard;
