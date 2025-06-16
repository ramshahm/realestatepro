// src/pages/PropertyDetails.js
import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import properties from "../data/properties";
import MapView from "../components/MapView";

export default function PropertyDetails() {
  const { id } = useParams();
  const locationState = useLocation();

  /* find the property either via state or fallback by id */
  const property =
    locationState.state?.property || properties.find((p) => p.id === +id);

  if (!property) {
    return (
      <div className="container py-5">
        <h4 className="text-danger">Property not found.</h4>
        <Link to="/listing" className="btn btn-secondary mt-3">
          ← Back to Listings
        </Link>
      </div>
    );
  }

  /* destructure with defaults */
  const {
    title,
    img,
    price,
    location,
    type,
    lat = 28.61, // default coords if missing
    lng = 77.23,
    images = [],
  } = property;

  const gallery =
    images.length > 0
      ? images
      : [
          `https://picsum.photos/seed/${id}a/600/400`,
          `https://picsum.photos/seed/${id}b/600/400`,
          `https://picsum.photos/seed/${id}c/600/400`,
        ];

  return (
    <div className="container py-4">
      {/* Back button */}
      <Link to="/listing" className="btn btn-outline-primary mb-3">
        ← Back to Listings
      </Link>

      {/* Title & Price */}
      <div className="d-flex justify-content-between flex-wrap mb-3">
        <h2 className="mb-2">{title}</h2>
        <h4 className="text-primary mb-2">₹{price.toLocaleString()}</h4>
      </div>

      {/* Nav Tabs */}
      <ul className="nav nav-tabs mb-4" id="detailTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="overview-tab"
            data-bs-toggle="tab"
            data-bs-target="#overview"
            type="button"
          >
            Overview
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="gallery-tab"
            data-bs-toggle="tab"
            data-bs-target="#gallery"
            type="button"
          >
            Gallery
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="map-tab"
            data-bs-toggle="tab"
            data-bs-target="#map"
            type="button"
          >
            Map
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Overview */}
        <div className="tab-pane fade show active" id="overview">
          <img
            src={img}
            alt={title}
            className="img-fluid rounded shadow-sm mb-3 w-100"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              width: "100%",
            }}
          />

          <ul className="list-group mb-4">
            <li className="list-group-item">
              <strong>Location:</strong> {location}
            </li>
            <li className="list-group-item">
              <strong>Type:</strong> {type}
            </li>
            <li className="list-group-item">
              <strong>Price:</strong> ₹{price.toLocaleString()}
            </li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="tab-pane fade" id="gallery">
          <div className="row g-3">
            {gallery.map((url, idx) => (
              <div key={idx} className="col-md-4">
                <img
                  src={url}
                  alt={`Gallery ${idx}`}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="tab-pane fade" id="map">
          <div className="ratio ratio-4x3 rounded shadow-sm my-3">
            {/* Using your MapView component */}
            <MapView lat={lat} lng={lng} />
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="card mt-5 p-4 shadow-sm">
        <h5 className="mb-3">Interested in this property?</h5>
        <form className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="3" placeholder="Message" />
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Contact Agent</button>
          </div>
        </form>
      </div>
    </div>
  );
}
