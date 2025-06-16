// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light text-muted mt-5 pt-4 border-top">
      <div className="container pb-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="text-primary">RealEstatePro</h5>
            <p className="small">
              Helping you find your perfect property across India.
            </p>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="text-dark">Explore</h6>
            <ul className="list-unstyled small">
              <li><Link className="text-reset text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-reset text-decoration-none" to="/listing">Listings</Link></li>
              <li><Link className="text-reset text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="text-dark">Account</h6>
            <ul className="list-unstyled small">
              <li><Link className="text-reset text-decoration-none" to="/login">Login</Link></li>
              <li><Link className="text-reset text-decoration-none" to="/signup">Signup</Link></li>
              <li><Link className="text-reset text-decoration-none" to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="text-dark">Contact</h6>
            <p className="small">Email: support@realestatepro.com<br />Phone: +91-9876543210</p>
          </div>
        </div>
      </div>

      <div className="bg-white text-center py-3 border-top small">
        &copy; {new Date().getFullYear()} RealEstatePro. All rights reserved.
      </div>
    </footer>
  );
}
