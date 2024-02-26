import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/BaseViews/headerSection';
import PromoSection from './components/BaseViews/promoSection';
import ProductOverview from './components/ProductViews/productOverview';
import SignIn from './components/RegistrationViews/signIn';
import Footer from './components/BaseViews/footerSection';
import ShoppingCart from './components/UserViews/userCart';
import MainContent from './components/mainContent';
import Wishlist from './components/UserViews/userWishlist';
import SignUp from './components/RegistrationViews/signup';
import ForgotPasswordView from './components/RegistrationViews/forgotPasswordView';
import ResetPasswordView from './components/RegistrationViews/resetPasswordView';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPasswordView />} />
          <Route path="/reset-password" element={<ResetPasswordView />} />
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
