// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Listing from './pages/Listing';
import PropertyDetails from './pages/PropertyDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PostProperty from './pages/PostProperty';

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* page content */}
      <main className="container my-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing/:id" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post-property" element={<PostProperty />} />

          {/* 404 fallback */}
          <Route
            path="*"
            element={<h4 className="text-center mt-5">Page not found</h4>}
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
