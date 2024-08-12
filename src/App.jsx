import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsDetail from './pages/ProductsDetails';
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';
import Validation from './pages/Validation';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes/:id" element={< ProductsDetail />} />
          <Route path="/cart" element={< CartPage />} />
          <Route path="/payement" element={< CheckOut />} />
          <Route path="/validation" element={< Validation />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
