import React, { useState } from 'react';
import './signup.css'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate=useNavigate()
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    validateForm();
    // If there are no errors, you can proceed with form submission
    if (isFormValid()) {
      // Perform form submission logic here
      navigate("/")
    } else {
      console.log('There are errors in the form.');
    }
  };

  // Function to validate form inputs
  const validateForm = () => {
    const errors = {};

    // Example validation rules (you can customize these)
    if (!formData.firstname.trim()) {
      errors.firstname = 'firstname is required';
    }
    if (!formData.lastname.trim()) {
      errors.lastname = 'lastname is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phonenumber.trim()) {
      errors.phonenumber = 'phonenumber is required';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    // } else if (!/^(?=.\d)(?=.[!@#$%^&])(?=.[a-zA-Z]).{8,}$/.test(formData.password)) {
    //   errors.password = 'Password must contain at least one numeric digit, one special character, and be at least 8 characters long';
    // }

    setFormErrors(errors);
  };

  const isFormValid = () => {
    return Object.values(formErrors).length===0;
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="form1">
        <div>
          <h1>Signup</h1>
          <label>firstname:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.firstname}</span>
        </div>
        <div>
          <label>lastname:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.lastname}</span>
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
          <label>phone number:</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.phonenumber}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.password}</span>
        </div>
        
        <button type="submit">Submit</button>
      </form>
      <div>
        <Footer/>

</div>
     </div>

        
  );
};

export default Signup;
