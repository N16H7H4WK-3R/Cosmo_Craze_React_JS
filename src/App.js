import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import PromoSection from './components/promoSection';
import ProductOverview from './components/productOverview';
import SignIn from './components/signIn';
import Footer from './components/footer';
import ShoppingCart from './components/cart';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <PromoSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/over"
            element={
              <>
                <Header />
                <ProductOverview />
              </>
            }
          />
          <Route path="/cart" element={
            <>
              <Header />
              <ShoppingCart />
              <Footer />
            </>
          }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
