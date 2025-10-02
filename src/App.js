import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
