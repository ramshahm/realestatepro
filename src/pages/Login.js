// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email }));
    alert('Logged in! (simulated)');
    navigate('/dashboard');
    window.location.reload();
  };

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <Helmet>
        <title>Login | RealEstatePro</title>
      </Helmet>

      <h2 className="mb-4">Login</h2>

      <form className="row g-3" onSubmit={handleLogin}>
        <div className="col-12">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
  );
}
