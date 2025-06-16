import React from 'react';

export default function Signup() {
  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Create Account</h2>
      <form className="row g-3">
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="col-12">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="col-12">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <div className="col-12">
          <button className="btn btn-success w-100">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
