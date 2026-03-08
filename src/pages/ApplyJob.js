import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { db } from "../firebase";
import { ref, push } from "firebase/database";

function ApplyJob() {

const location = useLocation();
const navigate = useNavigate();

const job = location.state?.job;

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [city,setCity] = useState("");
const [coverLetter,setCoverLetter] = useState("");
const [resumeFile,setResumeFile] = useState(null);

const [success,setSuccess] = useState(false);

if(!job){
return(
<div style={{padding:"120px",textAlign:"center"}}>
<h2>No Job Selected</h2>
<button onClick={()=>navigate("/jobs")}>Go Back</button>
</div>
)
}


// Convert Resume to Base64
const convertToBase64 = (file)=>{
return new Promise((resolve,reject)=>{

const reader = new FileReader();

reader.readAsDataURL(file);

reader.onload = ()=> resolve(reader.result);
reader.onerror = error => reject(error);

});
};


// Submit Application
const handleSubmit = async (e)=>{

e.preventDefault();

let resumeBase64="";

if(resumeFile){
resumeBase64 = await convertToBase64(resumeFile);
}

const applicationData = {

name,
email,
phone,
city,
coverLetter,

resume:resumeBase64,

jobTitle:job.title,
company:job.company,

status:"pending",

appliedAt:Date.now()

};

try{

const applicationsRef = ref(db,"applications");

await push(applicationsRef,applicationData);

// show animation
setSuccess(true);

// redirect after animation
setTimeout(()=>{
navigate("/jobs");
},2000);

}catch(error){
console.log(error);
}

};



return(

<div className="apply-container">

<div className="apply-card">

{success ? (

<div className="success-box">

<div className="checkmark">✓</div>

<h2>Application Submitted!</h2>

<p>Your application was sent successfully.</p>

</div>

):(

<>

<h1>Apply for {job.title}</h1>
<p className="company">{job.company}</p>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="text"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
required
/>

<input
type="text"
placeholder="City"
value={city}
onChange={(e)=>setCity(e.target.value)}
required
/>

<textarea
placeholder="Cover Letter"
rows="4"
value={coverLetter}
onChange={(e)=>setCoverLetter(e.target.value)}
></textarea>

<label>Upload Resume</label>

<input
type="file"
accept="image/*,application/pdf"
onChange={(e)=>setResumeFile(e.target.files[0])}
required
/>

<button type="submit">Submit Application</button>

</form>

</>

)}

</div>


<style>{`

.apply-container{
padding:120px 20px;
background:#f3f4f6;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
font-family:Segoe UI;
}

.apply-card{
background:white;
padding:40px;
border-radius:15px;
width:500px;
box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.apply-card h1{
margin-bottom:5px;
}

.company{
color:#6b7280;
margin-bottom:25px;
}

form{
display:flex;
flex-direction:column;
gap:15px;
}

input,textarea{
padding:12px;
border-radius:8px;
border:1px solid #ddd;
}

button{
padding:12px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#7c3aed);
color:white;
font-size:16px;
cursor:pointer;
}

button:hover{
opacity:.9;
}


/* Success Animation */

.success-box{
text-align:center;
padding:40px;
animation:fadeIn .5s ease;
}

.checkmark{
font-size:60px;
color:#22c55e;
animation:pop .4s ease;
}

@keyframes pop{
0%{transform:scale(0)}
100%{transform:scale(1)}
}

@keyframes fadeIn{
from{opacity:0}
to{opacity:1}
}

`}</style>

</div>

)

}

export default ApplyJob;