import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PasswordPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Layout from './components/chat/ChatLayout';
import SampleNumbers from './components/SampleNumbers';
import Accomplish from './components/Accomplish';
import SampleThings from './components/SampleThings';
import AboutTheRace from './components/AboutTheRace';
import HurdlesPage from './components/Hurdles';
import Alphabet from './components/Alphabet';
import Project from './components/Project';
import Speakers from './components/Speakers';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* General SEO Meta Tags */}
      <Helmet>
        <title>My React App | Welcome</title>
        <meta name="description" content="Welcome to My React App showcasing projects, speakers, and more." />
        <meta name="keywords" content="React, SEO, Projects, Speakers, Sample Things" />
        <meta name="author" content="Pavitra B S" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="My React App" />
        <meta property="og:description" content="Showcasing projects, speakers, and fun interactive components." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/preview-image.jpg" />
      </Helmet>

      <Routes>
        <Route path="/" element={<PasswordPage />} />
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
              <SampleNumbers />
              <SampleThings/>
              <Accomplish/>
              <HurdlesPage/>
              <AboutTheRace/>
              <Project/>
              <Alphabet/>
              <Speakers/>
              <Footer/>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
