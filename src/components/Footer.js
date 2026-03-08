import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* Left Section */}
          <div className="footer-left">
            <h2 className="footer-logo">JobPortal</h2>
            <p>
              Find your dream job with top companies around the world.
              We connect talent with opportunity.
            </p>

            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

          {/* Right Section (Map) */}
          <div className="footer-map">
            <h3>Our Location</h3>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.343102748693!2d75.7872709!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b5f0e3d7d7%3A0x9c2f8e4e8b8d3a3!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1694600000000"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} JobPortal. All Rights Reserved.
        </div>
      </footer>

      {/* Internal CSS */}
      <style>{`
        .footer {
          background: black;
          color: white;
          padding: 60px 20px 20px 20px;
          margin-top: 80px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 1200px;
          margin: auto;
        }

        .footer-left {
          flex: 1;
          min-width: 250px;
        }

        .footer-logo {
          font-size: 26px;
          margin-bottom: 15px;
          animation: fadeInUp 1s ease;
        }

        .footer-left p {
          line-height: 1.6;
          opacity: 0.9;
        }

        .social-icons {
          margin-top: 20px;
          display: flex;
          gap: 15px;
        }

        .social-icons a {
          text-decoration: none;
          color: white;
          font-size: 14px;
          transition: 0.3s;
        }

        .social-icons a:hover {
          color: #ffd700;
          transform: translateY(-3px);
        }

        .footer-links {
          flex: 1;
          min-width: 200px;
        }

        .footer-links h3 {
          margin-bottom: 15px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          text-decoration: none;
          color: white;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #ffd700;
          padding-left: 5px;
        }

        .footer-map {
          flex: 1;
          min-width: 280px;
        }

        .footer-map h3 {
          margin-bottom: 15px;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.3);
          font-size: 14px;
          opacity: 0.8;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }

          .footer-map iframe {
            height: 180px;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;