import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import PromoSection from './components/promoSection';
import ProductOverview from './components/productOverview';
import SignIn from './components/signIn';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Router>
        <Routes>
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
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
