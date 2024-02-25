import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import PromoSection from './components/promoSection';
import ProductOverview from './components/productOverview';
import SignIn from './components/signIn';
import Footer from './components/footer';
import ShoppingCart from './components/cart';
import MainContent from './components/mainContent';
import Wishlist from './components/wishlist';
import SignUp from './components/signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
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
                <Footer />
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
          <Route path="/wishlist" element={
            <>
              <Header />
              <Wishlist />
              <Footer />
            </>
          }
          />
          <Route path='/product' element={
            <>
              <Header />
              <MainContent />
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
