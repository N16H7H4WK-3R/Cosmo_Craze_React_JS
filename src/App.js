import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/BaseViews/headerSection';
import PromoSection from './components/BaseViews/promoSection';
import Footer from './components/BaseViews/footerSection';
import MainContent from './components/mainContent';
import PreLoader from './components/preLoader';

const SignIn = lazy(() => import('./components/RegistrationViews/signIn'));
const SignUp = lazy(() => import('./components/RegistrationViews/signup'));
const ForgotPasswordView = lazy(() => import('./components/RegistrationViews/forgotPasswordView'));
const ResetPasswordView = lazy(() => import('./components/RegistrationViews/resetPasswordView'));
const ProductOverview = lazy(() => import('./components/ProductViews/productOverview'));
const ShoppingCart = lazy(() => import('./components/UserViews/userCart'));
const Wishlist = lazy(() => import('./components/UserViews/userWishlist'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<PreLoader />}>
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
            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <ShoppingCart />
                  <Footer />
                </>
              }
            />
            <Route
              path="/wishlist"
              element={
                <>
                  <Header />
                  <Wishlist />
                  <Footer />
                </>
              }
            />
            <Route
              path="/product"
              element={
                <>
                  <Header />
                  <MainContent />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
