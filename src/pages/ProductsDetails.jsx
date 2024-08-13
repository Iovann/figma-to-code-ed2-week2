import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SizeButton from '../components/SizeButton';
import ClothesLike from '../components/ClothesLike';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductsDetail = () => {
    const [product, setProduct] = useState(null);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [variants, setVariants] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [buttonText, setButtonText] = useState("ADD TO CART");
    const { id } = useParams();
    const { addItem, cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const canSplitTitle = (title) => {
        if (typeof title === 'string') {
            const parts = title.split(' / ');
            return parts.length > 1;
        }
        return false;
    };

    const getSizeAndColor = (title) => {
        if (canSplitTitle(title)) {
            const parts = title.split(' / ');
            return {
                size: parts[0],
                color: parts[1]
            };
        }
        return { size: title, color: '' };
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const query = `{ product(id: "gid://shopify/Product/${id}") { id title description featuredImage { id url } variants(first: 5) { edges { node { id title image { url } price { amount currencyCode } } } } } }`;
                const request = await fetch(`https://mock.shop/api?query=${encodeURIComponent(query)}`);
                const response = await request.json();

                if (response.data && response.data.product) {
                    const { title, description, featuredImage, variants } = response.data.product;
                    const data = variants.edges.map(edge => edge.node);
                    setTitle(title);
                    setDescription(description);
                    setVariants(data);
                    setProduct({
                        title: title,
                        image: featuredImage.url
                    });

                    const { size, color } = getSizeAndColor(data[0].title);
                    setSelectedColor(color);
                } else {
                    console.error('Aucune donnée trouvée dans la réponse');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        const fetchRelatedProducts = async () => {
            try {
                const query = `{ products(first: 20) { edges { node { id title description featuredImage { id url } variants(first: 3) { edges { node { id title image { url } price { amount currencyCode } } } } } } } }`;
                const request = await fetch(`https://mock.shop/api?query=${encodeURIComponent(query)}`);
                const response = await request.json();

                if (response.data && response.data.products) {
                    const products = response.data.products.edges.map(edge => edge.node);

                    const filteredProducts = products
                        .filter(product => product.id !== `gid://shopify/Product/${id}`)
                        .map(product => ({
                            id: product.id,
                            title: product.title,
                            description: product.description,
                            image: product.featuredImage?.url,
                            variant: product.variants.edges[0]?.node
                        }));

                    const generateRandomNumbers = (min, max) => {
                        let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
                        let num2 = num1 + 3;
                        if (num2 > max) {
                            num2 = num1 - 3;
                        }
                        return [num1, num2];
                    };

                    const [start, end] = generateRandomNumbers(0, filteredProducts.length - 1);
                    const [startIndex, endIndex] = start < end ? [start, end] : [end, start];
                    const slicedProducts = filteredProducts.slice(startIndex, endIndex + 1);

                    setRelatedProducts(slicedProducts);
                } else {
                    console.error('Aucune donnée trouvée dans la réponse');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchProduct();
        fetchRelatedProducts();
    }, [id]);

    const handleAddToCart = () => {

        if (buttonText === "VIEW MY CART") {
            navigate("/cart");
            return
        }
        if (variants.length > 0) {
            const itemToAdd = {
                key: `${variants[0].id} ${selectedColor}`,
                id: variants[0].id,
                title: title,
                price: variants[0].price.amount,
                imageUrl: product.image,
                size: variants[0].title.split(' / ')[0],
                color: selectedColor,
                quantity: 1
            };

            addItem(itemToAdd);
            setButtonText("VIEW MY CART");
        }
    };


    const handleBuy = () => {
        handleAddToCart();
        navigate("/payement");
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);

        const selectedVariant = variants.find(variant => variant.title.includes(color));
        if (selectedVariant) {
            setProduct({ ...product, image: selectedVariant.image.url });
        }
    };

    useEffect(() => {
        const itemInCart = cartItems.find(item => item.id === variants[0]?.id && item.color === selectedColor);
        setButtonText(itemInCart ? "VIEW MY CART" : "ADD TO CART");
    }, [selectedColor, cartItems, variants]);

    const { size, color } = getSizeAndColor(variants[0]?.title);
    const showColorOptions = color !== '';

    return (
        <>
            <Navbar />
            <section className='container pb-5 pt-3'>
                <div className="row align-items-center py-5">
                    <div className="col-xl-6">
                        {product && (
                            <img src={product.image} alt="clothes presentation" className='img-fluid rounded-5 w-100' width={579} height={600} />
                        )}
                    </div>
                    <div className="col-xl-6 pt-4 pt-xl-0">
                        <h2 className='fs-2 fw-bold mb-3 font-chillax'>{title}</h2>
                        {variants.length > 0 && (
                            <h3 className='fw-semibold fs-2 mb-3'>
                                {variants[0].price.currencyCode} $ {variants[0].price.amount}
                            </h3>
                        )}
                        {showColorOptions && (
                            <>
                                <span className='fw-semibold fs-3'>Color: {selectedColor}</span>
                                <p className='pt-3'>
                                    <img
                                        src="/assets/images/green.svg"
                                        alt="color green"
                                        className={`img-fluid me-2 ${selectedColor === 'Green' ? 'shadow-lg' : ''}`}
                                        onClick={() => handleColorChange('Green')}
                                    />
                                    <img
                                        src="/assets/images/purple.svg"
                                        alt="color purple"
                                        className={`img-fluid mx-2 ${selectedColor === 'Purple' ? 'shadow-lg' : ''}`}
                                        onClick={() => handleColorChange('Purple')}
                                    />
                                    <img
                                        src="/assets/images/ocean.svg"
                                        alt="color ocean"
                                        className={`img-fluid mx-2 ${selectedColor === 'Ocean' ? 'shadow-lg' : ''}`}
                                        onClick={() => handleColorChange('Ocean')}
                                    />
                                    <img
                                        src="/assets/images/olive.svg"
                                        alt="color olive"
                                        className={`img-fluid mx-2 ${selectedColor === 'Olive' ? 'shadow-lg' : ''}`}
                                        onClick={() => handleColorChange('Olive')}
                                    />
                                </p>
                            </>
                        )}
                        <p className='fw-semibold fs-3'>Size:</p>
                        {product &&
                            <SizeButton sizeChoice={size} />
                        }
                        <p className='pt-4 w-100 d-flex container'>
                            <button className='btn btn-dark px-lg-5  px-3  py-3 fw-bold rounded-pill me-1 w-50' onClick={handleBuy}>BUY NOW</button>
                            <button className='btn btn-light px-lg-5  px-3  py-3 fw-bold rounded-pill border border-1 border-black ms-1 w-50' onClick={handleAddToCart}>{buttonText}</button>
                        </p>
                        <p className='fs-3 fw-bold pt-3 font-chillax'>Description</p>
                        <p className='fs-5'>{description}</p>
                    </div>
                </div>

                <h3 className='fs-2 font-chillax'>You may also like</h3>
                <div className="row g-3 py-5 justify-content-lg-start justify-content-center">
                    {relatedProducts.map((product) => (
                        <ClothesLike
                            key={product.id}
                            variant={product.variant}
                            title={product.title}
                            id={product.id}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductsDetail;
