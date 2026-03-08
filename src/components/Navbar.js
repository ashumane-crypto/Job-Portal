import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>

        <div className="logo">JobPortal</div>

        {/* Toggle Button */}
        <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>

          <li>
            <Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
          </li>

          <li>
            <Link to="/jobs" onClick={()=>setMenuOpen(false)}>Jobs</Link>
          </li>

          <li>
            <Link to="/profile" onClick={()=>setMenuOpen(false)}>Profile</Link>
          </li>

          <li>
            <Link to="/login" className="login-btn" onClick={()=>setMenuOpen(false)}>
              Login
            </Link>
          </li>

        </ul>

      </nav>

<style>{`

/* Navbar */

.navbar{
position:sticky;
top:0;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:16px 60px;

background:rgba(255,255,255,0.12);
backdrop-filter:blur(14px);
-webkit-backdrop-filter:blur(14px);

border-bottom:1px solid rgba(255,255,255,0.15);

transition:all .35s ease;
z-index:1000;
}

/* Scroll Effect */

.navbar.scrolled{
background:linear-gradient(
135deg,
rgba(37,99,235,0.95),
rgba(124,58,237,0.95)
);

box-shadow:0 10px 30px rgba(0,0,0,0.25);
}

/* Logo */

.logo{
font-size:24px;
font-weight:700;
color:white;
letter-spacing:1px;
}

/* Nav Links */

.nav-links{
list-style:none;
display:flex;
align-items:center;
gap:35px;
}

.nav-links a{
text-decoration:none;
color:white;
font-size:16px;
font-weight:500;
position:relative;
transition:.3s;
}

/* Hover underline */

.nav-links a::after{
content:"";
position:absolute;
left:0;
bottom:-4px;
width:0%;
height:2px;
background:white;
transition:.3s;
}

.nav-links a:hover::after{
width:100%;
}

/* Login Button */

.login-btn{
padding:8px 20px;
border-radius:30px;

background:linear-gradient(
135deg,
#60a5fa,
#7c3aed
);

box-shadow:0 6px 15px rgba(0,0,0,.25);
transition:.35s;
}

.login-btn:hover{
transform:translateY(-2px) scale(1.05);
box-shadow:0 10px 25px rgba(0,0,0,.35);
}

/* Hamburger */

.hamburger{
display:none;
flex-direction:column;
cursor:pointer;
gap:5px;
}

.hamburger span{
width:25px;
height:3px;
background:white;
border-radius:5px;
transition:0.3s;
}

/* Mobile */

@media(max-width:768px){

.navbar{
padding:15px 25px;
}

.hamburger{
display:flex;
}

/* Mobile Menu */

.nav-links{
position:absolute;
top:70px;
right:-100%;
flex-direction:column;
background:linear-gradient(
135deg,
#2563eb,
#7c3aed
);
width:220px;
padding:25px;
gap:20px;
border-radius:12px 0 0 12px;
box-shadow:0 10px 25px rgba(0,0,0,0.3);
transition:.35s;
}

.nav-links.open{
right:0;
}

}

/* Body spacing */

body{
margin:0;
}

`}</style>

    </>
  );
}

export default Navbar;