import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <>

<nav className="navbar">

<div className="logo">JobPortal</div>

{/* Hamburger */}

<div
className={menuOpen ? "hamburger active" : "hamburger"}
onClick={()=>setMenuOpen(!menuOpen)}
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
  <Link to="/about" onClick={()=>setMenuOpen(false)}>About</Link>
</li>

<li>
<Link to="/jobs" onClick={()=>setMenuOpen(false)}>Jobs</Link>
</li>

<li>
<Link to="/profile" onClick={()=>setMenuOpen(false)}>Profile</Link>
</li>

<li>
<Link
to="/login"
className="login-btn"
onClick={()=>setMenuOpen(false)}
>
Login
</Link>
</li>

</ul>

</nav>


<style>{`

/* NAVBAR */

.navbar{

position:sticky;
top:0;
width:100%;

display:flex;
justify-content:space-between;
align-items:center;

padding:16px 60px;

background:linear-gradient(
135deg,
#2563eb,
#7c3aed
);

box-shadow:0 6px 18px rgba(0,0,0,0.25);

z-index:1000;

}


/* LOGO */

.logo{

font-size:24px;
font-weight:700;
color:white;
letter-spacing:1px;

}


/* NAV LINKS */

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


/* LOGIN BUTTON */

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


/* HAMBURGER */

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


/* MOBILE */

@media(max-width:768px){

.navbar{
padding:15px 25px;
}

.hamburger{
display:flex;
}

/* MOBILE MENU */

.nav-links{

position:absolute;
top:65px;
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


/* BODY */

body{
margin:0;
}

`}</style>

    </>
  );
}

export default Navbar;