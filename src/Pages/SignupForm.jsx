import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupForm({ onToggle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulating an API request with setTimeout
      setTimeout(() => {
        toast.success('Signup successful! Redirecting...', {
          onClose: () => {
            // After success, navigate to the next page (e.g., Dashboard)
            navigate('/dashboard');
          }
        });
      }, 1000);

    } catch (error) {
      toast.error('An error occurred during signup.');
    }
  };

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="name"
          placeholder="Enter a username"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Sign Up</button>
        <p>Already have an account? <a href="#" onClick={onToggle}>Login</a></p>
      </form>
      
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </>
  );
}
