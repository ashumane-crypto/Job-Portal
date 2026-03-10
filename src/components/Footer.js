import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Left Section */}
        <div style={styles.section}>
          <h2 style={styles.logo}>JobPortal</h2>

          <p style={styles.text}>
            Find your dream job with top companies around the world.
            We connect talent with opportunity.
          </p>

          <div style={styles.social}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Facebook
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div style={styles.section}>
          <h3>Quick Links</h3>

          <ul style={styles.list}>
            <li>
              <a href="/" style={styles.link}>Home</a>
            </li>

            <li>
              <a href="/jobs" style={styles.link}>Jobs</a>
            </li>

            <li>
              <a href="/profile" style={styles.link}>Profile</a>
            </li>

            <li>
              <a href="/login" style={styles.link}>Login</a>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div style={styles.section}>
          <h3>Our Location</h3>

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Jaipur&output=embed"
            width="100%"
            height="200"
            style={styles.map}
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} JobPortal. All Rights Reserved.
      </div>
    </footer>
  );
}

const styles = {

  footer: {
    background: "#000",
    color: "#fff",
    padding: "60px 20px 20px",
    marginTop: "80px"
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px"
  },

  section: {
    flex: "1",
    minWidth: "250px"
  },

  logo: {
    fontSize: "26px",
    marginBottom: "15px"
  },

  text: {
    lineHeight: "1.6",
    opacity: "0.9"
  },

  social: {
    marginTop: "20px",
    display: "flex",
    gap: "15px"
  },

  link: {
    color: "#fff",
    textDecoration: "none"
  },

  list: {
    listStyle: "none",
    padding: "0"
  },

  map: {
    border: "0",
    borderRadius: "10px"
  },

  bottom: {
    textAlign: "center",
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255,255,255,0.3)",
    fontSize: "14px"
  }
};

export default Footer;