import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import API_ENDPOINTS from '../config/api';
import { useAuth } from '../context/AuthContext';

export default function LoginForm({ onToggle }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = { data: { token: 'dummy-token' } }; 

      login(response.data.token, formData.email);
      toast.success('Login successful! Redirecting...', {
        onClose: () => {
          navigate('/dashboard');
        }
      });
    } catch (error) {
      toast.error('An error occurred during login');
    }
  };

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="submit-btn">Log in</button>
        <p>Don't have an account? <a href="#" onClick={onToggle}>Sign up</a></p>
      </form>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} />
    </>
  );
}
