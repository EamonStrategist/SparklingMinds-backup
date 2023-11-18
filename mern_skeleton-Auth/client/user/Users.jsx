import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

const Users = () => {
    return (
      <>
        {/* Render the navbar */}
        <div className="navbar">
          <Link to="/" className="link">
            Home
          </Link>{' '}
          |{' '}
          <Link to="/users" className="link">
            USERS
          </Link>{' '}
          |{' '}
          <Link to="/signup" className="link">
            SIGNUP
          </Link>{' '}
          |{' '}
          <Link to="/signin" className="link">
            SIGNIN
          </Link>{' '}
          |{' '}
          <Link to="/" className="link">
            Sign-out
          </Link>{' '}
          |{' '}
          <Link to="/about" className="link">
            About
          </Link>{' '}
          |{' '}
          <Link to="/products" className="link">
            Products
          </Link>{' '}
          |{' '}
          <Link to="/contact" className="link">
            Contact
          </Link>{' '}
          |{' '}
          <Link to="/admin" className="link">
            Admin
          </Link>
        </div>

        <footer className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-logo.png" alt="Instagram" />
          </a>
          <br></br>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-logo.png" alt="Facebook" />
          </a>
        </div>
      </footer>
  
        
      </>
    );
  };

export default Users;