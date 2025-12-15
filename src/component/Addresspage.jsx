import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullname: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (validateForm()) {
      // Perform form submission logic here
      navigate("/payment");
    } else {
      console.log('There are errors in the form.');
    }
  };

  // Function to validate form inputs
  const validateForm = () => {
    const errors = {};

    if (!formData.fullname.trim()) {
      errors.fullname = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.addressLine1.trim()) {
      errors.addressLine1 = 'Address Line 1 is required';
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      errors.state = 'State is required';
    }

    if (!formData.postalCode.trim()) {
      errors.postalCode = 'Postal Code is required';
    }

    setFormErrors(errors); // Update form errors state

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  return (
    <form onSubmit={handleSubmit} className="form1">
      <div>
        <h1>Customer Address</h1>
        <label>Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.fullname}</span>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.email}</span>
      </div>
      <div>
        <label>Address Line 1:</label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.addressLine1}</span>
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.addressLine2}</span>
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.city}</span>
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.state}</span>
      </div>
      <div>
        <label>Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.postalCode}</span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
