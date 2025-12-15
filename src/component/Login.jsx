import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import giri from './logo/smallbanner1.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const Login = () => {
  const navigate=useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(formData);

    if (isFormValid()) {
      navigate("/")
    } else {
      console.log('There are errors in the form.');
    }
  };

  const validateForm = () => {
    const errors = {};
  
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    setFormErrors(errors);
    return errors
  };
  

  const isFormValid = () => {
    return Object.keys(formErrors).length === 0;
  };

  return (
    <div>
      <div className="pro">
        <img src={giri} alt="Food Delivery Logo" style={{ width: "1500px", height: "220px" }} />
      </div>
      <div className="body1">
        <div className="container">
          <header>Sign in</header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
            <center><button type="submit">Login</button></center>
            <div className="signup">
              <span>First time here? </span>
              <Link to="/Signup">create an account</Link>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Login;
