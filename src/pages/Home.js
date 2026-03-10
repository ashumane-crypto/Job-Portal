import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* IMAGES */

import engineering from "../assets/engineering.webp";
import design from "../assets/design.jpg";
import product from "../assets/product.jpg";
import marketing from "../assets/marketing.avif";
import sales from "../assets/sales.jpg";
import data from "../assets/data.avif";
import support from "../assets/support.avif";
import finance from "../assets/finance.webp";

import techcorp from "../assets/techcorp_solutions_logo.jpg";
import designhub from "../assets/designhub.jpg";
import datascience from "../assets/datascience.jpg";
import financefirst from "../assets/financefirst.png";

function Home() {

  const navigate = useNavigate();

  const [title,setTitle] = useState("");
  const [location,setLocation] = useState("");

  const handleSearch = () => {

    navigate(`/jobs?title=${title}&location=${location}`);

  };

  return (

<div className="home-container">


{/* HERO */}

<section className="hero">

<div className="hero-overlay">

<h1>Find Your Dream Job Today</h1>

<p>
Discover thousands of job opportunities from top companies around the world
</p>

<div className="search-box">

<input
type="text"
placeholder="Job title, keywords, or company"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
type="text"
placeholder="City, state, or remote"
value={location}
onChange={(e)=>setLocation(e.target.value)}
/>

<button onClick={handleSearch}>
Search Jobs
</button>

</div>

<div className="stats">

<div>
<h2>10,000+</h2>
<p>Active Jobs</p>
</div>

<div>
<h2>5,000+</h2>
<p>Companies</p>
</div>

<div>
<h2>50,000+</h2>
<p>Job Seekers</p>
</div>

</div>

</div>

</section>


{/* CATEGORY */}

<section className="category">

<h2>Browse by Category</h2>

<div className="category-grid">

{[
{name:"Engineering",img:engineering},
{name:"Design",img:design},
{name:"Product",img:product},
{name:"Marketing",img:marketing},
{name:"Sales",img:sales},
{name:"Data Science",img:data},
{name:"Customer Success",img:support},
{name:"Finance",img:finance}
].map((cat,index)=>(

<div key={index} className="category-card">

<img src={cat.img} alt={cat.name}/>

<h3>{cat.name}</h3>

<p>{Math.floor(Math.random()*150)} open positions</p>

</div>

))}

</div>

</section>


{/* FEATURED JOBS */}

<section className="featured">

<div className="section-header">

<h2>Featured Jobs</h2>

<button onClick={()=>navigate("/jobs")}>
View All Jobs →
</button>

</div>

<div className="job-grid">

{[
{
title:"Senior Frontend Developer",
company:"TechCorp Inc",
location:"San Francisco, CA",
salary:"$120k - $180k"
},
{
title:"UI/UX Designer",
company:"DesignHub",
location:"New York, NY",
salary:"$90k - $130k"
},
{
title:"Data Scientist",
company:"DataScience Pro",
location:"Seattle, WA",
salary:"$130k - $190k"
}
].map((job,index)=>(

<div key={index} className="job-card">

<h3>{job.title}</h3>

<p className="company">{job.company}</p>

<p>{job.location}</p>

<p className="salary">{job.salary}</p>

</div>

))}

</div>

</section>


{/* COMPANIES */}

<section className="companies">

<h2>Top Companies Hiring</h2>

<div className="company-grid">

{[
{name:"TechCorp Inc",logo:techcorp},
{name:"DesignHub",logo:designhub},
{name:"DataScience Pro",logo:datascience},
{name:"FinanceFirst",logo:financefirst}
].map((comp,index)=>(

<div key={index} className="company-card">

<img src={comp.logo} alt={comp.name}/>

<h3>{comp.name}</h3>

<p>Leading company in industry</p>

<span>{Math.floor(Math.random()*20)} open positions</span>

</div>

))}

</div>

</section>


{/* CTA */}

<section className="cta">

<h2>Ready to Take the Next Step?</h2>

<p>Create your profile and start applying today</p>

<div className="cta-buttons">

<button onClick={()=>navigate("/register")}>
Create Profile
</button>

<button onClick={()=>navigate("/jobs")} className="outline">
Browse Jobs
</button>

</div>

</section>


<style>{`

.home-container{
font-family:'Segoe UI',sans-serif;
color:#1f2937;
}


/* HERO */

.hero{
background:linear-gradient(135deg,#2563eb,#1e40af);
padding:100px 20px;
text-align:center;
color:white;
}

.hero-overlay{
padding:80px 20px;
border-radius:10px;
animation:fadeIn 1s ease;
}

.hero h1{
font-size:48px;
margin-bottom:20px;
}

.hero p{
font-size:18px;
margin-bottom:30px;
}


/* SEARCH */

.search-box{
display:flex;
justify-content:center;
gap:10px;
flex-wrap:wrap;
margin-bottom:40px;
}

.search-box input{
padding:12px;
width:250px;
border-radius:8px;
border:none;
}

.search-box button{
padding:12px 20px;
border-radius:8px;
border:none;
background:#111827;
color:white;
cursor:pointer;
transition:.3s;
}

.search-box button:hover{
transform:scale(1.05);
}


/* STATS */

.stats{
display:flex;
justify-content:center;
gap:50px;
margin-top:30px;
}


/* SECTIONS */

.category,.featured,.companies{
padding:70px 20px;
text-align:center;
}


/* GRID */

.category-grid,.job-grid,.company-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:25px;
margin-top:30px;
}


/* CATEGORY CARD */

.category-card{
background:white;
padding:25px;
border-radius:12px;
box-shadow:0 5px 20px rgba(0,0,0,0.08);
transition:.4s;
animation:fadeUp .8s ease;
}

.category-card img{
width:100%;
height:140px;
object-fit:cover;
border-radius:10px;
margin-bottom:15px;
}

.category-card:hover{
transform:translateY(-8px) scale(1.03);
}


/* JOB CARD */

.job-card{
background:white;
padding:25px;
border-radius:12px;
box-shadow:0 5px 20px rgba(0,0,0,0.08);
transition:.4s;
}

.job-card:hover{
transform:translateY(-8px);
}

.job-card .company{
font-weight:600;
margin:5px 0;
}

.salary{
color:#2563eb;
font-weight:bold;
}


/* COMPANY CARD */

.company-card{
background:white;
padding:25px;
border-radius:12px;
box-shadow:0 5px 20px rgba(0,0,0,0.08);
transition:.4s;
}

.company-card img{
width:100%;
height:100px;
object-fit:contain;
margin-bottom:10px;
}

.company-card:hover{
transform:translateY(-8px);
}


/* HEADER */

.section-header{
display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:auto;
}

.section-header button{
background:none;
border:none;
color:#2563eb;
cursor:pointer;
}


/* CTA */

.cta{
background:linear-gradient(135deg,#2563eb,#7c3aed);
color:white;
text-align:center;
padding:70px 20px;
}

.cta-buttons{
margin-top:20px;
}

.cta button{
padding:12px 20px;
margin:10px;
border-radius:8px;
border:none;
cursor:pointer;
}

.cta .outline{
background:transparent;
border:2px solid white;
color:white;
}


/* ANIMATIONS */

@keyframes fadeIn{
from{opacity:0}
to{opacity:1}
}

@keyframes fadeUp{
from{opacity:0;transform:translateY(30px)}
to{opacity:1;transform:translateY(0)}
}


/* MOBILE */

@media(max-width:768px){

.hero h1{
font-size:32px;
}

.stats{
flex-direction:column;
gap:20px;
}

.section-header{
flex-direction:column;
gap:10px;
}

.search-box input{
width:100%;
}

}

`}</style>

</div>

  );
}

export default Home;