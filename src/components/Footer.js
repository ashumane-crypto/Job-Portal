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

            {/* Social Links */}
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/jobs">Jobs</a>
              </li>

              <li>
                <a href="/profile">Profile</a>
              </li>

              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="footer-map">
            <h3>Our Location</h3>

            <iframe
              title="map"
              src="https://www.google.com/maps?q=Jaipur&output=embed"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} JobPortal. All Rights Reserved.
        </div>
      </footer>

      <style>{`
        .footer{
          background:black;
          color:white;
          padding:60px 20px 20px;
          margin-top:80px;
        }

        .footer-container{
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:40px;
          max-width:1200px;
          margin:auto;
        }

        .footer-left{
          flex:1;
          min-width:250px;
        }

        .footer-logo{
          font-size:26px;
          margin-bottom:15px;
        }

        .footer-left p{
          line-height:1.6;
          opacity:.9;
        }

        .social-icons{
          margin-top:20px;
          display:flex;
          gap:15px;
        }

        .social-icons a{
          text-decoration:none;
          color:white;
          transition:.3s;
        }

        .social-icons a:hover{
          color:#ffd700;
          transform:translateY(-3px);
        }

        .footer-links{
          flex:1;
          min-width:200px;
        }

        .footer-links h3{
          margin-bottom:15px;
        }

        .footer-links ul{
          list-style:none;
          padding:0;
        }

        .footer-links li{
          margin-bottom:10px;
        }

        .footer-links a{
          text-decoration:none;
          color:white;
        }

        .footer-links a:hover{
          color:#ffd700;
          padding-left:5px;
        }

        .footer-map{
          flex:1;
          min-width:280px;
        }

        .footer-bottom{
          text-align:center;
          margin-top:40px;
          padding-top:20px;
          border-top:1px solid rgba(255,255,255,.3);
          font-size:14px;
        }

        @media(max-width:768px){

          .footer-container{
            flex-direction:column;
            text-align:center;
          }

          .social-icons{
            justify-content:center;
          }

        }
      `}</style>
    </>
  );
}

export default Footer;