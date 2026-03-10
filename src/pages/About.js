import React from "react";

function About(){

return(

<div className="about-container">

{/* HERO SECTION */}

<section className="hero">

<h1>About Our Job Portal</h1>

<p>
Our platform connects talented students with top companies.
Thousands of students have already found their dream jobs through our portal.
</p>

</section>


{/* ABOUT PLATFORM */}

<section className="about-section">

<h2>Who We Are</h2>

<p>
JobPortal is designed to help students discover job opportunities,
apply easily, and connect with leading companies across different industries.
Our mission is to make job searching simple, transparent, and effective.
</p>

<p>
We collaborate with companies, startups, and recruiters to provide
verified job opportunities and help students start their professional careers.
</p>

</section>



{/* FEATURES */}

<section className="features">

<h2>Why Choose Our Platform</h2>

<div className="feature-grid">

<div className="feature-card">
<h3>Verified Jobs</h3>
<p>All job postings are verified to ensure genuine opportunities.</p>
</div>

<div className="feature-card">
<h3>Easy Applications</h3>
<p>Apply for jobs with just a few clicks and track your application status.</p>
</div>

<div className="feature-card">
<h3>Career Growth</h3>
<p>Find opportunities that match your skills and help grow your career.</p>
</div>

<div className="feature-card">
<h3>Trusted by Students</h3>
<p>Thousands of students trust our platform to start their careers.</p>
</div>

</div>

</section>



{/* SUCCESS STORIES */}

<section className="success">

<h2>Success Stories</h2>

<p className="subtitle">
Students who successfully got placed through our portal
</p>

<div className="success-grid">


<div className="success-card">

<img src="https://randomuser.me/api/portraits/men/32.jpg" alt="student"/>

<h3>Rahul Sharma</h3>

<p className="company">Placed at Google</p>

<p className="review">
"This platform helped me connect with top recruiters.
The job application process was very smooth and easy."
</p>

</div>


<div className="success-card">

<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="student"/>

<h3>Priya Patel</h3>

<p className="company">Placed at Amazon</p>

<p className="review">
"I found my first software developer job through this portal.
Highly recommended for freshers."
</p>

</div>


<div className="success-card">

<img src="https://randomuser.me/api/portraits/men/55.jpg" alt="student"/>

<h3>Amit Verma</h3>

<p className="company">Placed at Microsoft</p>

<p className="review">
"The platform made job searching simple.
I received multiple interview opportunities."
</p>

</div>


<div className="success-card">

<img src="https://randomuser.me/api/portraits/women/52.jpg" alt="student"/>

<h3>Sneha Kulkarni</h3>

<p className="company">Placed at Infosys</p>

<p className="review">
"I loved the easy application process and the companies listed here."
</p>

</div>

</div>

</section>



{/* FOOTER CTA */}

<section className="cta">

<h2>Start Your Career Journey Today</h2>

<p>Join thousands of students who found their dream jobs.</p>

<button>Explore Jobs</button>

</section>



<style>{`

.about-container{
font-family:Segoe UI;
color:#1e293b;
}

/* HERO */

.hero{
background:linear-gradient(135deg,#2563eb,#7c3aed);
color:white;
text-align:center;
padding:80px 20px;
}

.hero h1{
font-size:40px;
margin-bottom:15px;
}

.hero p{
max-width:700px;
margin:auto;
font-size:18px;
}


/* ABOUT */

.about-section{
padding:60px 40px;
text-align:center;
max-width:900px;
margin:auto;
}

.about-section h2{
margin-bottom:20px;
font-size:32px;
}

.about-section p{
font-size:16px;
line-height:1.7;
margin-bottom:15px;
}



/* FEATURES */

.features{
background:#f1f5f9;
padding:60px 40px;
text-align:center;
}

.features h2{
font-size:32px;
margin-bottom:40px;
}

.feature-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}

.feature-card{
background:white;
padding:25px;
border-radius:10px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
transition:.3s;
}

.feature-card:hover{
transform:translateY(-5px);
}

.feature-card h3{
margin-bottom:10px;
}



/* SUCCESS STORIES */

.success{
padding:60px 40px;
text-align:center;
}

.success h2{
font-size:32px;
margin-bottom:10px;
}

.subtitle{
margin-bottom:40px;
color:#64748b;
}

.success-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.success-card{
background:white;
padding:25px;
border-radius:10px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
text-align:center;
transition:.3s;
}

.success-card:hover{
transform:translateY(-5px);
}

.success-card img{
width:90px;
height:90px;
border-radius:50%;
object-fit:cover;
margin-bottom:15px;
}

.company{
color:#2563eb;
font-weight:bold;
margin-bottom:10px;
}

.review{
font-size:14px;
color:#475569;
}



/* CTA */

.cta{
background:linear-gradient(135deg,#2563eb,#7c3aed);
color:white;
text-align:center;
padding:70px 20px;
}

.cta h2{
font-size:32px;
margin-bottom:10px;
}

.cta button{
margin-top:20px;
padding:12px 30px;
border:none;
border-radius:30px;
background:white;
color:#2563eb;
font-weight:bold;
cursor:pointer;
transition:.3s;
}

.cta button:hover{
transform:scale(1.05);
}


`}</style>

</div>

)

}

export default About