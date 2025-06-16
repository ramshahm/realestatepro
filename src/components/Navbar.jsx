import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';          // optional icon

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('user'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload();
  };

  /* sticky‑top keeps nav pinned while scrolling */
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          RealEstatePro
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navMenu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Listings</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

            {isLoggedIn ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/post-property">Post Property</Link></li>
                <li className="nav-item">
                  <button className="btn btn-sm btn-outline-danger ms-2" onClick={handleLogout}>
                    <FaSignOutAlt className="me-1" /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
