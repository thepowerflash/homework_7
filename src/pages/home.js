import React, { useState } from 'react';
import './home.css';

function FormforRegistration() {
  const initialFormData = {
    fullName: '',
    phoneNumber: '',
    email: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="container">
    <div>
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div >
          <label>Phone number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div >
          <label>Email address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      {submittedData && (
        <div>
          <p>Username: {submittedData.fullName}</p>
          <p>Phone number: {submittedData.phoneNumber}</p>
          <p>Email address: {submittedData.email}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default FormforRegistration;