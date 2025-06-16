import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/properties';
import { Helmet } from 'react-helmet';
export default function Home() {
  const navigate = useNavigate();

  /* ─────────── state ─────────── */
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('buy');   // NEW

  /* ─────────── submit search ─────────── */
  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({ location, type, price, category }).toString();
    navigate(`/listing?${query}`);
  };

  /* ─────────── featured + cities ─────────── */
  const featured = properties.slice(0, 3);
  const cities = [
    { name: 'Delhi',     img: 'https://picsum.photos/seed/delhi/400/300' },
    { name: 'Mumbai',    img: 'https://picsum.photos/seed/mumbai/400/300' },
    { name: 'Pune',      img: 'https://picsum.photos/seed/pune/400/300' },
    { name: 'Bangalore', img: 'https://picsum.photos/seed/bangalore/400/300' },
    { name: 'Hyderabad', img: 'https://picsum.photos/seed/hyd/400/300' },
    { name: 'Kolkata',   img: 'https://picsum.photos/seed/kolkata/400/300' },
    { name: 'Chennai',   img: 'https://picsum.photos/seed/chennai/400/300' },
    { name: 'Ahmedabad', img: 'https://picsum.photos/seed/ahm/400/300' },
  ];

  return (
    <>
    <Helmet>
        <title>Home | RealEstatePro</title>
        <meta name="description" content="Find and post real estate properties for buy, rent, or commercial use." />
      </Helmet>
      {/* ─────────── HERO ─────────── */}
      <div
        className="py-5 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '450px',
        }}
      >
        <div
          className="container text-center"
          style={{ background: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '8px' }}
        >
          <h1 className="display-5 fw-bold mb-3">Find Your Dream Property</h1>
          <p className="lead mb-4">Buy, Rent, or List properties across top cities in India</p>

          {/* SEARCH FORM */}
          <form onSubmit={handleSearch} className="row g-2 justify-content-center">
            <div className="col-md-3">
              <input
                className="form-control"
                placeholder="Location (e.g. Delhi)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="house">House</option>
              </select>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              >
                <option value="">Max Price</option>
                <option value="500000">₹5 Lac</option>
                <option value="1000000">₹10 Lac</option>
                <option value="2500000">₹25 Lac</option>
                <option value="5000000">₹50 Lac</option>
                <option value="10000000">₹1 Cr+</option>
              </select>
            </div>
            <div className="col-md-2 d-grid">
              <button className="btn btn-light fw-bold">Search</button>
            </div>
          </form>

          {/* CATEGORY TABS */}
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            {['buy', 'rent', 'commercial'].map((c) => (
              <button
                key={c}
                className={`btn ${category === c ? 'btn-light' : 'btn-outline-light'}`}
                onClick={() => setCategory(c)}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
            <button className="btn btn-success" onClick={() => navigate('/post-property')}>
              Post Property
            </button>
          </div>
        </div>
      </div>

      {/* ─────────── FEATURED PROPERTIES ─────────── */}
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">Featured Properties</h4>
          <button className="btn btn-outline-primary btn-sm" onClick={() => navigate('/listing')}>
            View All
          </button>
        </div>
        <div className="row g-4">
          {featured.map((p) => (
            <div key={p.id} className="col-sm-6 col-lg-4">
              <PropertyCard property={p} />
            </div>
          ))}
        </div>
      </div>

      {/* ─────────── POPULAR CITIES ─────────── */}
      <div className="container mt-5">
        <h4 className="mb-4">Popular Cities</h4>
        <div className="row g-4">
          {cities.map((c, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg-3">
              <div
                className="card shadow-sm h-100"
                role="button"
                onClick={() => navigate(`/listing?location=${c.name}`)}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="card-img-top"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0">{c.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
