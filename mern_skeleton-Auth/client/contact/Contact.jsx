import React from 'react';
import './Contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/users">Users</a>
          <a href="/signup">Signup</a>
          <a href="/signin">Signin</a>
          <a href="/signout">Sign-out</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
          <a href="/admin">Admin</a>
          {/* Add more links as needed */}
        </div>
       
        
        <div className="contact-container">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <div className="input-group">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input className="input" type="text" id="name" name="name" />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input className="input" type="email" id="email" name="email" />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="message">
                Message:
              </label>
              <textarea className="input" id="message" name="message" rows="4"></textarea>
            </div>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </div>
        </div>
      );
    };

export default Contact;