import React, { useState } from "react";
import "./About.css";

const About = () => {
  const images = [
    "/images/pexels-ari-roberts-9649448.jpg",
    "/images/pexels-castorly-stock-3641056.jpg",
    "/images/pendants (2).jpg",
    "/images/necklaces (2).jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/signup">Signup</a>
        <a href="/signin">Signin</a>
        <a href="/signout">Sign-out</a>
        <a href="/about">About Us</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
        <a href="/admin">Admin</a>
        {/* Add more links as needed */}
      </div>
      <h1>About Us</h1>
      {/* Image Carousel */}
      <div className="image-carousel">
        <button onClick={handlePrev} aria-label="Previous">
          &#9665;
        </button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button onClick={handleNext} aria-label="Next">
          &#9655;
        </button>
      </div>
      {/* Explore by Category */}
      <div className="explore-section">
        <h2>EXPLORE BY CATEGORY</h2>
        <div className="category-images">
          <a href="/earrings">
            <img src="/images/earrings.jpg" alt="Earrings" />
            Earrings
          </a>
          <a href="/necklaces">
            <img src="/images/necklaces.jpg" alt="Necklaces" />
            Necklaces
          </a>
          <a href="/rings">
            <img src="/images/rings.jpg" alt="Rings" />
            Rings
          </a>
          <a href="/bracelets">
            <img src="/images/bracelets.jpg" alt="Bracelets" />
            Bracelets
          </a>
          <a href="/bracelets">
            <img
              src="/images/pexels-kristina-paukshtite-885218.jpg"
              alt="Different Bracelet"
            />
            New Bracelets
          </a>

          <a href="/pendants">
            <img src="/images/pendants.jpg" alt="Pendants" />
            Pendants
          </a>
        </div>
      </div>
      {/* Add your content here */}
      {/* Mission and Vision */}
      <div className="mission-vision-section">
        <h2>Our Mission</h2>
        <p>
          "To provide exquisite, handcrafted jewelry that celebrates life's
          special moments, offering timeless elegance and lasting beauty. We are
          committed to delivering exceptional craftsmanship, unparalleled
          quality, and personalized service to our customers, making each piece
          a cherished symbol of love, style, and individuality."
        </p>
        <h2>Our Vision</h2>
        <p>
          "To be the preferred destination for discerning individuals seeking
          uniquely crafted jewelry that transcends trends and stands the test of
          time. We envision a world where our jewelry becomes an integral part
          of life's most meaningful occasions, inspiring joy, and creating
          lasting memories. Through innovation, passion, and a dedication to
          excellence, we aim to be a leader in the jewelry industry, known for
          our artistry, integrity, and commitment to customer satisfaction."
        </p>
      </div>

      {/* Footer */}

      <footer className="footer">
        <div className="social-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram.jpg" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
