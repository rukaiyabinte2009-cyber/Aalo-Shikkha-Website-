import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './presentation/pages/HomePage';
import FeaturesPage from './presentation/pages/FeaturesPage';
import PricingPage from './presentation/pages/PricingPage';
import BlogPage from './presentation/pages/BlogPage';
import ServicesPage from './presentation/pages/ServicesPage';
import AboutPage from './presentation/pages/AboutPage';
import ContactPage from './presentation/pages/ContactPage';
import TermsPage from './presentation/pages/TermsPage';
import PrivacyPage from './presentation/pages/PrivacyPage';
import MainLayout from './presentation/layouts/MainLayout';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
