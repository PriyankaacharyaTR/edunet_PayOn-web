import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Auth0Provider
      domain="domain"
      clientId="clientid"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
