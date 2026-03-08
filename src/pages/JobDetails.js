import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function JobDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state?.job;

  // ✅ Navigate to Apply Job page
  const handleApply = () => {
    navigate("/apply", { state: { job } });
  };

  if (!job) {
    return (
      <div style={{ padding: "120px", textAlign: "center" }}>
        <h2>No Job Selected</h2>
        <button onClick={() => navigate("/jobs")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="jobdetails-container">

      <div className="jobdetails-card">

        <h1 className="title">{job.title}</h1>

        <p className="company">{job.company}</p>

        <div className="info-grid">

          <div className="info-box">
            <h3>📍 Location</h3>
            <p>{job.location}</p>
          </div>

          <div className="info-box">
            <h3>💰 Salary</h3>
            <p>{job.salary}</p>
          </div>

          <div className="info-box">
            <h3>🕒 Job Type</h3>
            <p>Full Time</p>
          </div>

          <div className="info-box">
            <h3>🏢 Experience</h3>
            <p>2+ Years</p>
          </div>

        </div>

        <div className="section">
          <h2>Job Description</h2>
          <p>
            We are looking for a passionate {job.title} to join our team at {job.company}.
            You will work on modern technologies and collaborate with talented engineers
            to build scalable and high-performance applications.
          </p>
        </div>

        <div className="section">
          <h2>Responsibilities</h2>
          <ul>
            <li>Develop high quality applications</li>
            <li>Collaborate with cross-functional teams</li>
            <li>Write clean and maintainable code</li>
            <li>Fix bugs and improve performance</li>
            <li>Participate in code reviews</li>
          </ul>
        </div>

        <div className="section">
          <h2>Required Skills</h2>
          <ul>
            <li>Strong knowledge of programming</li>
            <li>Experience with modern frameworks</li>
            <li>Problem solving skills</li>
            <li>Team collaboration</li>
            <li>Good communication skills</li>
          </ul>
        </div>

        <div className="btn-section">
          <button className="apply-btn" onClick={handleApply}>Apply Now</button>

          <button className="back-btn" onClick={() => navigate("/jobs")}>
            Back to Jobs
          </button>
        </div>

      </div>

      <style>{`

      .jobdetails-container{
        padding:120px 20px 80px;
        background:#f3f4f6;
        min-height:100vh;
        font-family:Segoe UI;
      }

      .jobdetails-card{
        max-width:900px;
        margin:auto;
        background:white;
        padding:40px;
        border-radius:15px;
        box-shadow:0 10px 30px rgba(0,0,0,0.08);
        animation:fadeUp .6s ease;
      }

      .title{
        font-size:34px;
        margin-bottom:5px;
      }

      .company{
        font-size:18px;
        color:#6b7280;
        margin-bottom:30px;
      }

      .info-grid{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
        gap:20px;
        margin-bottom:30px;
      }

      .info-box{
        background:#f9fafb;
        padding:18px;
        border-radius:10px;
        text-align:center;
      }

      .info-box h3{
        font-size:16px;
        margin-bottom:6px;
      }

      .section{
        margin-bottom:25px;
      }

      .section h2{
        font-size:22px;
        margin-bottom:10px;
        color:#2563eb;
      }

      .section ul{
        padding-left:18px;
      }

      .section li{
        margin-bottom:6px;
      }

      .btn-section{
        margin-top:30px;
        display:flex;
        gap:15px;
      }

      .apply-btn{
        padding:12px 25px;
        border:none;
        border-radius:8px;
        background:linear-gradient(135deg,#2563eb,#7c3aed);
        color:white;
        font-size:16px;
        cursor:pointer;
        transition:.3s;
      }

      .apply-btn:hover{
        transform:scale(1.05);
      }

      .back-btn{
        padding:12px 20px;
        border:none;
        border-radius:8px;
        background:#e5e7eb;
        cursor:pointer;
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

      @media(max-width:768px){

        .jobdetails-card{
          padding:25px;
        }

        .title{
          font-size:26px;
        }

        .btn-section{
          flex-direction:column;
        }

      }

      `}</style>

    </div>
  );
}

export default JobDetails;