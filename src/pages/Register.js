import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    portfolio: "",
    linkedin: "",
    about: "",
    resume: ""
  });

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeUpload = (e) => {

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setFormData({
        ...formData,
        resume: reader.result
      });

      setPreview(reader.result);

    };

    reader.readAsDataURL(file);

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    try {

      setLoading(true);

      // Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Save user profile data in Realtime Database
      await set(ref(db, "users/" + user.uid), {

        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        skills: formData.skills,
        experience: formData.experience,
        education: formData.education,
        portfolio: formData.portfolio,
        linkedin: formData.linkedin,
        about: formData.about,
        resume: formData.resume,
        createdAt: new Date().toISOString()

      });

      alert("Account Created Successfully!");

      navigate("/home");

    } catch (error) {

      console.error(error);
      alert(error.message);

    }

    setLoading(false);

  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>Create Your Job Profile</h1>
        <p>Build your professional profile and start applying for jobs</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="City / Country"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (React, Java, Python etc)"
            value={formData.skills}
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Work Experience"
            value={formData.experience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
          />

          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio Website"
            value={formData.portfolio}
            onChange={handleChange}
          />

          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile"
            value={formData.linkedin}
            onChange={handleChange}
          />

          <textarea
            name="about"
            placeholder="Tell us about yourself"
            value={formData.about}
            onChange={handleChange}
          ></textarea>

          <div className="upload-box">
            <label>Upload Resume / Profile Image</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleResumeUpload}
              required
            />
          </div>

          {preview && (
            <div className="preview">
              <img src={preview} alt="preview"/>
            </div>
          )}

          <button type="submit">
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

      </div>

<style>{`

.register-page{
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#2563eb,#7c3aed);
padding:80px 20px;
font-family:Segoe UI;
}

.register-card{
background:white;
padding:40px;
border-radius:15px;
width:100%;
max-width:600px;
box-shadow:0 20px 50px rgba(0,0,0,0.2);
animation:fadeUp 0.7s ease;
}

.register-card h1{
text-align:center;
margin-bottom:5px;
}

.register-card p{
text-align:center;
color:#6b7280;
margin-bottom:30px;
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
font-size:14px;
}

textarea{
resize:none;
height:90px;
}

.upload-box{
font-size:14px;
}

.preview{
text-align:center;
}

.preview img{
width:120px;
border-radius:10px;
margin-top:10px;
}

button{
padding:12px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#7c3aed);
color:white;
font-weight:bold;
cursor:pointer;
transition:0.3s;
}

button:hover{
transform:scale(1.03);
}

@keyframes fadeUp{
from{
opacity:0;
transform:translateY(30px);
}
to{
opacity:1;
transform:translateY(0);
}
}

@media(max-width:600px){

.register-card{
padding:25px;
}

}

`}</style>

    </div>
  );
}

export default Register;