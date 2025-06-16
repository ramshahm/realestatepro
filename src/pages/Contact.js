// src/pages/Contact.js
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <div className="row justify-content-center">
      <Helmet>
        <title>Contact Us | RealEstatePro</title>
        <meta
          name="description"
          content="Reach out to RealEstatePro for queries and support."
        />
      </Helmet>

      <div className="col-md-6">
        <h2 className="mb-4">Contact an Agent</h2>

        <form className="row g-3">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
