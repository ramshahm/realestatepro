import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import properties from '../data/properties';

export default function Listing() {
  const query = new URLSearchParams(useLocation().search);

  const [filters, setFilters] = useState({
    location: query.get('location') || '',
    type: query.get('type') || '',
    minPrice: query.get('minPrice') || '',
    maxPrice: query.get('price') || '',
  });

  const category = query.get('category') || 'buy';
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1);
  };

  // Filter logic
  const filtered = properties.filter((p) => {
    const matchesLocation = !filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType = !filters.type || p.type.toLowerCase() === filters.type.toLowerCase();
    const matchesMin = !filters.minPrice || p.price >= +filters.minPrice;
    const matchesMax = !filters.maxPrice || p.price <= +filters.maxPrice;
    const matchesCategory = category === 'buy' || !p.category || p.category === category;
    return matchesLocation && matchesType && matchesMin && matchesMax && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Helmet>
        <title>Search Properties | RealEstatePro</title>
        <meta name="description" content="Browse and filter property listings by location, price, and type." />
      </Helmet>

      <div className="container py-4">
        <h2 className="mb-4">Search Properties</h2>

        {/* Filter form */}
        <form className="row g-3 mb-4">
          <div className="col-md-3">
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">All Locations</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          <div className="col-md-3">
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="house">House</option>
            </select>
          </div>

          <div className="col-md-2">
            <input
              name="minPrice"
              type="number"
              className="form-control"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              name="maxPrice"
              type="number"
              className="form-control"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </div>
        </form>

        {/* Property Grid */}
        <div className="row g-4">
          {paginated.length > 0 ? (
            paginated.map((item) => (
              <div key={item.id} className="col-sm-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img src={item.img} className="card-img-top" alt={item.title} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="text-primary fw-semibold">₹{item.price.toLocaleString()}</p>
                    <p className="text-muted">{item.location}</p>
                    <Link
                      to={`/listing/${item.id}`}
                      state={{ property: item }}
                      className="btn btn-outline-primary btn-sm mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No properties found matching your criteria.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-5">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  <button className="page-link">{i + 1}</button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
