import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterButton from '../components/FilterButton';
import HeroSection from '../components/HeroSection';
import BeforeFooter from '../components/BeforeFooter';
import ClothesCard from '../components/ClothesCard';
import Loading from '../components/Loading';
const Home = () => {
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterCounts, setFilterCounts] = useState({});
  const [viewMore, setViewMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      const request = await fetch('https://mock.shop/api?query={collections(first:%2010){edges%20{node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}');
      const response = await request.json();
      let collections = response.data.collections.edges.map(edge => edge.node);

      collections = collections.filter(collection =>
        ["Accessories", "Featured", "Unisex"].includes(collection.title)
      );
      setCollections(collections);

      const counts = {};
      await Promise.all(collections.map(async (collection) => {
        const query = `{collection(id: "${collection.id}") { products(first: 20) { edges { node { id title description featuredImage { id url } variants(first: 3) { edges { node { price { amount currencyCode } } } } } } } } }`;
        const request = await fetch(`https://mock.shop/api?query=${encodeURIComponent(query)}`);
        const response = await request.json();
        counts[collection.title] = response.data.collection.products.edges.length;
      }));
      setFilterCounts(counts);
    };

    const fetchInitialData = async () => {
      setLoading(true);
      await fetchCollections();
      await fetchProducts();
      setLoading(false);
    };

    fetchInitialData();
  }, []);


  const fetchProducts = async (filter = "All") => {
    setLoading(true);
    let query = `{products(first: 23) { edges { node { id title description featuredImage { id url } variants(first: 3) { edges { node { price { amount currencyCode } } } } } } } }`;
    if (filter !== "All") {
      query = `{collection(id: "${filter}") { products(first: 20) { edges { node { id title description featuredImage { id url } variants(first: 3) { edges { node { price { amount currencyCode } } } } } } } } }`;
    }

    const request = await fetch(`https://mock.shop/api?query=${encodeURIComponent(query)}`);
    const response = await request.json();

    if (filter === "All") {
      setProducts(response.data.products.edges.map(edge => edge.node));
    } else {
      setProducts(response.data.collection.products.edges.map(edge => edge.node));
    }
    setLoading(false);
  };

  const handleFilterClick = (title) => {
    setActiveFilter(title);
    const collectionId = collections.find(c => c.title === title)?.id || "All";
    fetchProducts(collectionId);
    setViewMore(false);
  };

  const displayedProducts = viewMore ? products : products.slice(0, 6);

  return (
    <>
      <Navbar />
      <section className='container main-content'>
        <HeroSection />
        <p className="text-center py-4 fw-bolder fs-3 font-chillax">
          Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
        </p>

        {loading && <Loading />}
        {!loading &&
          <>
            <div className="d-flex flex-wrap gap-2 justify-content-lg-center">
              <FilterButton
                text="All"
                count={23}
                isActive={"All" === activeFilter}
                onClick={() => handleFilterClick("All")}
              />
              {collections.map((item, index) => (
                <FilterButton
                  key={index}
                  text={item.title}
                  count={filterCounts[item.title] || 0}
                  isActive={item.title === activeFilter}
                  onClick={() => handleFilterClick(item.title)}
                />
              ))}
            </div>

            <div className="row g-3 py-5 justify-content-lg-start justify-content-center">
              {displayedProducts.map((product) => (
                <ClothesCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center pb-3">
              <button
                className={`btn btn-light border border-1 border-black rounded-pill ${products.length <= 6 ? 'd-none' : 'd-inline'}`}
                onClick={() => setViewMore(!viewMore)}
              >
                {viewMore ? "View Less" : "View More"}
              </button>
            </div>
          </>
        }

        <h2 className='fw-semibold text-center text-uppercase font-chillax'>Our Collection</h2>
        <p className="text-center fs-5">Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
        <BeforeFooter />
      </section>
      <Footer />
    </>
  )
}

export default Home
