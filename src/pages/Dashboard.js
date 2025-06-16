// src/pages/Dashboard.js
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="container py-5">
      <Helmet>
        <title>My Dashboard | RealEstatePro</title>
      </Helmet>

      <h2 className="mb-4">Welcome, {user?.email || 'User'}</h2>

      <p className="lead">
        Here’s your dashboard. You can manage your listings, view saved
        properties, and more.
      </p>

      {/* Add actual dashboard content later */}
      <div className="alert alert-info">Dashboard features coming soon!</div>
    </div>
  );
}
