import React from "react";
import { useLocation, Link } from "react-router-dom";

function JobList() {

  const locationHook = useLocation();
  const queryParams = new URLSearchParams(locationHook.search);

  const searchTitle = queryParams.get("title")?.toLowerCase() || "";
  const searchLocation = queryParams.get("location")?.toLowerCase() || "";

  // 20 Jobs (India)
  const jobs = [
    { title: "Frontend Developer", company: "Infosys", location: "Bangalore, India", salary: "₹8L - ₹12L", description: "Build responsive web apps using React and modern UI frameworks." },
    { title: "Backend Developer", company: "TCS", location: "Mumbai, India", salary: "₹7L - ₹11L", description: "Develop scalable backend APIs using Node.js and databases." },
    { title: "Full Stack Developer", company: "Wipro", location: "Hyderabad, India", salary: "₹9L - ₹14L", description: "Work on both frontend and backend systems." },
    { title: "UI/UX Designer", company: "Zoho", location: "Chennai, India", salary: "₹6L - ₹9L", description: "Design intuitive and modern UI experiences." },
    { title: "Data Scientist", company: "Flipkart", location: "Bangalore, India", salary: "₹12L - ₹18L", description: "Analyze large datasets and build ML models." },
    { title: "Machine Learning Engineer", company: "Amazon", location: "Hyderabad, India", salary: "₹15L - ₹22L", description: "Develop machine learning models and AI systems." },
    { title: "DevOps Engineer", company: "Accenture", location: "Pune, India", salary: "₹10L - ₹16L", description: "Manage CI/CD pipelines and cloud infrastructure." },
    { title: "Web Developer", company: "HCL Tech", location: "Noida, India", salary: "₹7L - ₹10L", description: "Develop dynamic websites and applications." },
    { title: "Mobile App Developer", company: "Paytm", location: "Delhi, India", salary: "₹9L - ₹13L", description: "Build Android and iOS mobile apps." },
    { title: "Cybersecurity Analyst", company: "KPMG", location: "Mumbai, India", salary: "₹8L - ₹12L", description: "Protect company systems from cyber threats." },
    { title: "QA Engineer", company: "Capgemini", location: "Pune, India", salary: "₹6L - ₹9L", description: "Test software and ensure product quality." },
    { title: "Blockchain Developer", company: "Polygon", location: "Remote, India", salary: "₹14L - ₹20L", description: "Develop blockchain based applications." },
    { title: "Cloud Architect", company: "IBM", location: "Bangalore, India", salary: "₹16L - ₹24L", description: "Design scalable cloud architecture." },
    { title: "Business Analyst", company: "Deloitte", location: "Gurgaon, India", salary: "₹8L - ₹12L", description: "Analyze business requirements and solutions." },
    { title: "Software Engineer", company: "Microsoft", location: "Hyderabad, India", salary: "₹18L - ₹28L", description: "Build enterprise software systems." },
    { title: "AI Engineer", company: "Google", location: "Bangalore, India", salary: "₹20L - ₹32L", description: "Develop artificial intelligence models." },
    { title: "Database Administrator", company: "Oracle", location: "Bangalore, India", salary: "₹10L - ₹15L", description: "Manage and optimize databases." },
    { title: "Game Developer", company: "Nazara Technologies", location: "Mumbai, India", salary: "₹7L - ₹11L", description: "Develop interactive games using Unity." },
    { title: "IT Support Engineer", company: "Tech Mahindra", location: "Pune, India", salary: "₹5L - ₹8L", description: "Provide technical support to enterprise systems." },
    { title: "Network Engineer", company: "Cisco", location: "Bangalore, India", salary: "₹11L - ₹17L", description: "Design and maintain network infrastructure." }
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTitle) &&
    job.location.toLowerCase().includes(searchLocation)
  );

  return (
    <div className="joblist-container">

      <h1 className="page-title">Available Jobs</h1>

      <p className="search-info">
        Showing results for:
        <span> {searchTitle || " All Titles "} </span>
        in
        <span> {searchLocation || " All Locations "} </span>
      </p>

      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-card">

              <h2>{job.title}</h2>
              <p className="company">{job.company}</p>
              <p>{job.location}</p>
              <p className="salary">{job.salary}</p>

              {/* ✅ FIXED LINK */}
              <Link to="/jobdetails" state={{ job }}>
                <button>Apply Now</button>
              </Link>

            </div>
          ))
        ) : (
          <div className="no-results">
            <h2>No jobs found 😔</h2>
            <p>Try searching with different keywords.</p>
          </div>
        )}
      </div>

      <style>{`
        .joblist-container {
          padding: 100px 20px 60px;
          max-width: 1200px;
          margin: auto;
          font-family: 'Segoe UI', sans-serif;
        }

        .page-title {
          text-align: center;
          font-size: 36px;
          margin-bottom: 10px;
          animation: fadeIn 1s ease-in-out;
        }

        .search-info {
          text-align: center;
          margin-bottom: 40px;
          color: #6b7280;
        }

        .search-info span {
          color: #2563eb;
          font-weight: bold;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .job-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: 0.4s;
          animation: slideUp 0.6s ease forwards;
          opacity: 0;
        }

        .job-card:nth-child(even) {
          animation-delay: 0.2s;
        }

        .job-card:nth-child(odd) {
          animation-delay: 0.4s;
        }

        .job-card:hover {
          transform: translateY(-8px);
        }

        .job-card h2 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .company {
          font-weight: 600;
          color: #374151;
        }

        .salary {
          color: #2563eb;
          font-weight: bold;
          margin: 10px 0;
        }

        .job-card button {
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .job-card button:hover {
          opacity: 0.9;
        }

        .no-results {
          text-align: center;
          grid-column: 1/-1;
          padding: 40px;
          background: #f3f4f6;
          border-radius: 12px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 28px;
          }
        }
      `}</style>

    </div>
  );
}

export default JobList;