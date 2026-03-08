import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [loading,setLoading] = useState(false);

  const handleLogin = async (e)=>{
    e.preventDefault();

    if(loading) return;

    try{

      setLoading(true);

      // ADMIN LOGIN
      if(
        email === "harshithajadhav21@gmail.com" &&
        password === "Harshitha123"
      ){
        navigate("/admin");
        return;
      }

      // FIREBASE AUTH LOGIN
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // GET USER PROFILE FROM DATABASE
      const snapshot = await get(ref(db,"users/"+user.uid));

      if(snapshot.exists()){

        const userData = snapshot.val();

        localStorage.setItem("user",JSON.stringify(userData));

        navigate("/home");

      }

    }catch(error){

      console.error(error);
      setMessage("Invalid email or password");

    }

    setLoading(false);

  };

  return(

    <div className="login-page">

      <div className="login-container">

        <h1>Welcome Back 👋</h1>
        <p>Login to continue your job search</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {message && <p className="error">{message}</p>}

        <p className="register-link">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>

      </div>

<style>{`

.login-page{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#2563eb,#7c3aed);
font-family:Segoe UI;
overflow:hidden;
}

/* Animated background bubbles */

.login-page::before,
.login-page::after{
content:"";
position:absolute;
width:300px;
height:300px;
background:rgba(255,255,255,0.15);
border-radius:50%;
animation:float 8s infinite ease-in-out;
}

.login-page::before{
top:-100px;
left:-100px;
}

.login-page::after{
bottom:-120px;
right:-120px;
animation-delay:3s;
}

@keyframes float{
0%{transform:translateY(0)}
50%{transform:translateY(40px)}
100%{transform:translateY(0)}
}

/* Card */

.login-container{
background:white;
padding:40px;
border-radius:16px;
width:380px;
text-align:center;
box-shadow:0 20px 60px rgba(0,0,0,0.25);
animation:fadeUp .6s ease;
}

@keyframes fadeUp{
from{
opacity:0;
transform:translateY(40px);
}
to{
opacity:1;
transform:translateY(0);
}
}

.login-container h1{
margin-bottom:8px;
color:#111827;
}

.login-container p{
color:#6b7280;
margin-bottom:25px;
}

/* Form */

form{
display:flex;
flex-direction:column;
gap:15px;
}

input{
padding:13px;
border-radius:8px;
border:1px solid #d1d5db;
font-size:14px;
transition:.3s;
}

input:focus{
outline:none;
border-color:#2563eb;
box-shadow:0 0 0 3px rgba(37,99,235,0.15);
}

/* Button */

button{
padding:13px;
background:linear-gradient(135deg,#2563eb,#7c3aed);
color:white;
border:none;
border-radius:8px;
font-size:16px;
cursor:pointer;
transition:.35s;
}

button:hover{
transform:translateY(-2px);
box-shadow:0 8px 20px rgba(0,0,0,0.25);
}

/* Error */

.error{
margin-top:15px;
color:red;
font-size:14px;
}

/* Register link */

.register-link{
margin-top:20px;
font-size:14px;
}

.register-link a{
color:#2563eb;
font-weight:600;
text-decoration:none;
}

.register-link a:hover{
text-decoration:underline;
}

/* Mobile */

@media(max-width:500px){

.login-container{
width:90%;
padding:30px;
}

}

`}</style>

    </div>
  );
}

export default Login;