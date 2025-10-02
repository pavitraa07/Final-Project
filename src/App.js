import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Lazy-loaded components
const PasswordPage = lazy(() => import('./components/LandingPage'));
const HomePage = lazy(() => import('./components/HomePage'));
const Layout = lazy(() => import('./components/chat/ChatLayout'));
const SampleNumbers = lazy(() => import('./components/SampleNumbers'));
const Accomplish = lazy(() => import('./components/Accomplish'));
const SampleThings = lazy(() => import('./components/SampleThings'));
const AboutTheRace = lazy(() => import('./components/AboutTheRace'));
const HurdlesPage = lazy(() => import('./components/Hurdles'));
const Alphabet = lazy(() => import('./components/Alphabet'));
const Project = lazy(() => import('./components/Project'));
const Speakers = lazy(() => import('./components/Speakers'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Router>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>My React App | Welcome</title>
        <meta name="description" content="Welcome to My React App showcasing projects, speakers, and more." />
        <meta name="keywords" content="React, SEO, Projects, Speakers, Sample Things" />
        <meta name="author" content="Pavitra B S" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="My React App" />
        <meta property="og:description" content="Showcasing projects, speakers, and fun interactive components." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/preview-image.jpg" />
      </Helmet>

      {/* Lazy-loading components */}
      <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PasswordPage />} />
          <Route
            path="/home"
            element={
              <Layout>
                <HomePage />
                <SampleNumbers />
                <SampleThings />
                <Accomplish />
                <HurdlesPage />
                <AboutTheRace />
                <Project />
                <Alphabet />
                <Speakers />
                <Footer />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
