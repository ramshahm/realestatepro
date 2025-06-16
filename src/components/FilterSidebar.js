import React from 'react';

export default function FilterSidebar({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="accordion shadow-sm mb-4" id="filterAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingType">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseType"
          >
            Property Type
          </button>
        </h2>
        <div id="collapseType" className="accordion-collapse collapse show">
          <div className="accordion-body">
            <select
              className="form-select"
              name="type"
              value={filters.type}
              onChange={handleChange}
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="house">House</option>
            </select>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingPrice">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePrice"
          >
            Price Range
          </button>
        </h2>
        <div id="collapsePrice" className="accordion-collapse collapse">
          <div className="accordion-body">
            <input
              type="number"
              name="minPrice"
              className="form-control mb-2"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxPrice"
              className="form-control"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingLocation">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLocation"
          >
            Location
          </button>
        </h2>
        <div id="collapseLocation" className="accordion-collapse collapse">
          <div className="accordion-body">
            <input
              type="text"
              className="form-control"
              name="location"
              placeholder="e.g. Delhi"
              value={filters.location}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
