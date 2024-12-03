/* eslint-disable no-unused-vars */
import React from "react";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4 className="footer__title capitalize">Contact Info</h4>
          <p>
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            Opp. Roadways Bus Stand Patel Nagar Chowk
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            sharp_systemsksp@yahoo.co.in
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            +91 9758105523
          </p>
        </div>
        <div className="footer__col">
          <h4 className="capitalize">Company</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          {/* <a href="/">Work with Us</a> */}
          {/* <a href="/">Our Blogs</a> */}
          <a href="/">Terms and Conditions</a>
        </div>
        <div className="footer__col">
          <h4 className="capitalize">Useful Link</h4>
          {/* <a href="/">Help</a> */}
          <a href="/">Laptop</a>
          <a href="/">Desktop</a>
          <a href="/">Printers</a>
          <a href="/">Accessories</a>
        </div>
        <div className="footer__col">
          <h4>Social Media</h4>
          <p><a href=" https://www.instagram.com/sharp_systemksp ">
            <span>
              <i className="ri-instagram-fill"></i>
            </span>
            Instagram
            </a>
          </p>
          <p>
          <a href="https://www.facebook.com/share/1Jy3TXCHgj/?mibextid=qi2Omg">
            <span>
              <i className="ri-facebook-fill"></i>
            </span>
            Facebook
            </a>
          </p>
          <p>
          <a href="https://wa.me/9897022662">
            <span>
              <i className="ri-whatsapp-fill"></i>
            </span>
            9897022662
            </a>
          </p>

        </div>
      </footer>
      <div className="footer__bar">
        <p>Copyright &copy; 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
