import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdFax, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer py-3 mt-5">
      <div className="container d-flex justify-content-between">
        <h2>Our Address</h2>
        <p className="mt-4">© Copyright 2023</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGooglePlusG />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a
            href="mailto:fptudn@fpt.edu.vn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlusG />
          </a>
        </div>
      </div>
      <div className="container">
        <div className="address-info">
          <div className="contact-item">
            <MdLocationOn />
            <span>Khu đô thị FPT Đà Nẵng</span>
          </div>
          <div className="contact-item">
            <MdPhone />
            <span>+84023111111</span>
          </div>
          <div className="contact-item">
            <MdFax />
            <span>+852 8765 4321</span>
          </div>
          <div className="contact-item">
            <MdEmail />
            <span>
              <a href="mailto:fptudn@fpt.edu.vn">fptudn@fpt.edu.vn</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
