import React, { useState } from 'react';

export default function PostProperty() {
  const [form, setForm] = useState({
    title: '',
    price: '',
    type: '',
    location: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setForm(prev => ({
      ...prev,
      images: Array.from(e.target.files),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Property Submitted:', form);
    alert('Property posted! (simulated)');
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Post a New Property</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <input
            name="title"
            className="form-control"
            placeholder="Property Title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <input
            name="price"
            type="number"
            className="form-control"
            placeholder="Price (e.g. 5000000)"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <select
            name="type"
            className="form-select"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
          </select>
        </div>

        <div className="col-12">
          <input
            name="location"
            className="form-control"
            placeholder="Location (e.g. Delhi)"
            value={form.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <input
            type="file"
            multiple
            className="form-control"
            onChange={handleImageChange}
          />
          <div className="form-text">You can upload multiple images</div>
        </div>

        <div className="col-12">
          <button className="btn btn-success w-100">Submit</button>
        </div>
      </form>
    </div>
  );
}
