import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ref, get, update } from "firebase/database";

function AdminDashboard(){

const [users,setUsers] = useState([]);
const [applications,setApplications] = useState([]);
const [activeTab,setActiveTab] = useState("users");
const [loading,setLoading] = useState(true);

useEffect(()=>{

const fetchData = async()=>{

try{

const usersRef = ref(db,"users");
const usersSnap = await get(usersRef);

if(usersSnap.exists()){
const data = usersSnap.val();
setUsers(Object.values(data));
}

const appRef = ref(db,"applications");
const appSnap = await get(appRef);

if(appSnap.exists()){
const data = appSnap.val();

const apps = Object.entries(data).map(([id,value])=>({
id,
...value
}));

setApplications(apps);
}

}catch(error){
console.log(error);
}

setLoading(false);

}

fetchData();

},[]);


// Accept Application
const acceptApplication = async(id)=>{

try{

const appRef = ref(db,"applications/"+id);

await update(appRef,{
status:"accepted"
});

alert("Application Accepted");

setApplications(applications.map(app =>
app.id === id ? {...app,status:"accepted"} : app
));

}catch(error){
console.log(error);
}

}


// Decline Application
const declineApplication = async(id)=>{

try{

const appRef = ref(db,"applications/"+id);

await update(appRef,{
status:"rejected"
});

alert("Application Rejected");

setApplications(applications.map(app =>
app.id === id ? {...app,status:"rejected"} : app
));

}catch(error){
console.log(error);
}

}



return(

<div className="admin-container">

{/* Sidebar */}

<div className="sidebar">

<h2>Admin Panel</h2>

<button onClick={()=>setActiveTab("users")}>
👥 Registered Users
</button>

<button onClick={()=>setActiveTab("applications")}>
📄 Job Applications
</button>

</div>


{/* Main Content */}

<div className="content">

<h1>Admin Dashboard</h1>

<div className="stats">

<div className="stat-card">
<h3>Total Users</h3>
<p>{users.length}</p>
</div>

<div className="stat-card">
<h3>Total Applications</h3>
<p>{applications.length}</p>
</div>

</div>


{loading ? (

<p>Loading Data...</p>

):(


<>


{/* USERS */}

{activeTab==="users" && (

<div className="grid">

{users.map((user,index)=>(

<div className="card" key={index}>

{user.resume && (
<img src={user.resume} alt="resume" className="resume-img"/>
)}

<h3>{user.fullName}</h3>

<p><b>Email:</b> {user.email}</p>
<p><b>Phone:</b> {user.phone}</p>
<p><b>Location:</b> {user.location}</p>
<p><b>Skills:</b> {user.skills}</p>
<p><b>Experience:</b> {user.experience}</p>
<p><b>Education:</b> {user.education}</p>

</div>

))}

</div>

)}



{/* APPLICATIONS */}

{activeTab==="applications" && (

<div className="grid">

{applications.map((app,index)=>(

<div className="card" key={index}>

{app.resume && (
<img src={app.resume} alt="resume" className="resume-img"/>
)}

<h3>{app.name}</h3>

<p><b>Email:</b> {app.email}</p>
<p><b>Phone:</b> {app.phone}</p>
<p><b>City:</b> {app.city}</p>

<hr/>

<p><b>Job:</b> {app.jobTitle}</p>
<p><b>Company:</b> {app.company}</p>

<p>
<b>Status:</b> 
<span className={app.status || "pending"}>
{app.status || "pending"}
</span>
</p>


<div className="actions">

<button
className="accept"
onClick={()=>acceptApplication(app.id)}
>
Accept
</button>

<button
className="decline"
onClick={()=>declineApplication(app.id)}
>
Decline
</button>

</div>

</div>

))}

</div>

)}


</>

)}


</div>


<style>{`

.admin-container{
display:flex;
min-height:100vh;
font-family:Segoe UI;
background:#f3f4f6;
}

.sidebar{
width:230px;
background:#1e293b;
color:white;
padding:25px;
display:flex;
flex-direction:column;
gap:15px;
}

.sidebar h2{
margin-bottom:20px;
}

.sidebar button{
background:none;
border:none;
color:white;
padding:10px;
text-align:left;
cursor:pointer;
font-size:15px;
border-radius:6px;
}

.sidebar button:hover{
background:#334155;
}

.content{
flex:1;
padding:40px;
}

h1{
margin-bottom:20px;
}

.stats{
display:flex;
gap:20px;
margin-bottom:30px;
}

.stat-card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
text-align:center;
width:200px;
}

.stat-card p{
font-size:28px;
font-weight:bold;
color:#2563eb;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:20px;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.card h3{
margin-bottom:10px;
}

.card p{
font-size:14px;
margin:4px 0;
}

.resume-img{
width:100%;
height:150px;
object-fit:cover;
border-radius:8px;
margin-bottom:10px;
}

.actions{
display:flex;
gap:10px;
margin-top:10px;
}

.accept{
background:#22c55e;
border:none;
color:white;
padding:8px 12px;
border-radius:6px;
cursor:pointer;
}

.decline{
background:#ef4444;
border:none;
color:white;
padding:8px 12px;
border-radius:6px;
cursor:pointer;
}

.pending{
color:#f59e0b;
font-weight:bold;
}

.accepted{
color:#22c55e;
font-weight:bold;
}

.rejected{
color:#ef4444;
font-weight:bold;
}

`}</style>

</div>

)

}

export default AdminDashboard;