import React from 'react';
import './headerHome.css';

const headerHome = () => (
  <div className="h-18  p-2 text-center font-bold  bg-headerbg shadow-4xl fixed w-full z-50">
    <div className="py-4 text-xs lg:text-xl">
      <a href="/" className="mx-3 lg:mx-5">
        Home
      </a>
      <span className="dropdown">
        <button type="button" className="dropbtn mx-3 lg:mx-5">
          Services
        </button>
        <div className="dropdown-content">
          <a href="https://fibonalabs.com/services/experience-design">
            Experience Design
          </a>
          <a href="https://fibonalabs.com/services/product-development">
            Product Development
          </a>
          <a href="https://fibonalabs.com/services/cloud-solutions">
            Cloud Solutions
          </a>
        </div>
      </span>

      <a href="https://fibonalabs.com/casestudies" className="mx-3 lg:mx-5">
        Case Studies
      </a>

      <a href="https://fibonalabs.com/whitepaper" className="mx-3 lg:mx-5">
        Whitepaper
      </a>

      <a
        href="https://blog.fibonalabs.com/"
        target="_blank"
        rel="noreferrer"
        className="mx-3 lg:mx-5"
      >
        Blogs
      </a>

      <a href="https://www.fibonalabs.com/aboutus" className="mx-3 lg:mx-5">
        About Us
      </a>
      <a href="https://www.fibonalabs.com/contactus" className="mx-3 lg:mx-5">
        Contact Us
      </a>
    </div>
  </div>
);

export default headerHome;
