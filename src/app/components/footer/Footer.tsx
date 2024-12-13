import React from "react";

const Footer = () => {
  return (
    <footer className={""}>
      <p>
        <a>Get in touch with our support team</a> if you have any question or
        want to leave some feedback.
        <br />
        We’ll be happy to hear from you.
      </p>
      <div className="separator" />
      <div className="footer-menu">
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
