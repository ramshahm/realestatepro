// src/components/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PropertyCard – reusable card with Bootstrap carousel
 * @param {object} property - single property object
 */
export default function PropertyCard({ property }) {
  const { id, title, price, location, type } = property;

  /* ---------------------------------------------
     1) Choose gallery images
        - If property.images[] exists, use those
        - Otherwise generate 3 placeholder images
  --------------------------------------------- */
  const gallery = property.images?.length
    ? property.images
    : [
        `https://picsum.photos/seed/${id}a/400/240`,
        `https://picsum.photos/seed/${id}b/400/240`,
        `https://picsum.photos/seed/${id}c/400/240`,
      ];

  /* Unique carousel id to avoid clashes */
  const carouselId = `carousel-${id}`;

  return (
    <div className="card h-100 shadow-sm">
      {/* ---------- Bootstrap Carousel ----------- */}
      <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {gallery.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? 'active' : ''}`}
            >
              <img src={imgUrl} className="d-block w-100" alt={`Slide ${idx}`} />
            </div>
          ))}
        </div>

        {gallery.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>

      {/* ---------- Card Body ----------- */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="text-primary fw-semibold mb-1">
          ₹{price.toLocaleString()}
        </p>
        <p className="text-muted small">{location} • {type}</p>

        <Link
          to={`/listing/${id}`}
          state={{ property }}
          className="btn btn-outline-primary btn-sm mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
