import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { ref, get, update } from "firebase/database";
import { motion } from "framer-motion";

function Profile() {

  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);

  // ✅ NEW STATE FOR APPLICATIONS
  const [applications, setApplications] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {

    if (user) {

      const userRef = ref(db, "users/" + user.uid);

      get(userRef).then((snapshot) => {

        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }

      });

      // ✅ FETCH APPLICATIONS
      const appRef = ref(db, "applications");

      get(appRef).then((snapshot) => {

        if (snapshot.exists()) {

          const data = snapshot.val();

          const userApps = Object.values(data).filter(
            (app) => app.email === user.email
          );

          setApplications(userApps);

        }

      });

    }

  }, [user]);


  const handleChange = (e) => {

    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });

  };


  const handleUpdate = async () => {

    const userRef = ref(db, "users/" + user.uid);

    await update(userRef, userData);

    alert("Profile Updated Successfully");

    setEditMode(false);

  };


  const openResume = () => {

    if (!userData.resume) return;

    const link = document.createElement("a");
    link.href = userData.resume;
    link.target = "_blank";
    link.download = "resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };


  const getInitials = (name) => {

    if (!name) return "U";

    const words = name.trim().split(" ");

    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }

    return (
      words[0].charAt(0) +
      words[words.length - 1].charAt(0)
    ).toUpperCase();

  };


  if (!user) {
    return <h2 style={{textAlign:"center"}}>Please Login First</h2>;
  }


  return (

    <div style={styles.page}>

      <motion.div
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6}}
        style={styles.container}
      >

        <h2 style={styles.title}>My Profile</h2>

        <div style={styles.profileGrid}>

          {/* Avatar */}
          <div style={styles.imageSection}>

            <div style={styles.avatar}>
              {getInitials(userData.fullName)}
            </div>

          </div>


          {/* Profile Details */}
          <div style={styles.infoSection}>

            <label>Full Name</label>
            <input
              name="fullName"
              value={userData.fullName || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            <label>Email</label>
            <input
              name="email"
              value={userData.email || ""}
              disabled
              style={styles.input}
            />

            <label>Phone</label>
            <input
              name="phone"
              value={userData.phone || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            <label>Location</label>
            <input
              name="location"
              value={userData.location || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            <label>Skills</label>
            <input
              name="skills"
              value={userData.skills || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            <label>Experience</label>
            <input
              name="experience"
              value={userData.experience || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            <label>Education</label>
            <input
              name="education"
              value={userData.education || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            <label>Portfolio</label>
            <input
              name="portfolio"
              value={userData.portfolio || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            <label>LinkedIn</label>
            <input
              name="linkedin"
              value={userData.linkedin || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            <label>About</label>
            <textarea
              name="about"
              value={userData.about || ""}
              onChange={handleChange}
              disabled={!editMode}
              style={styles.input}
            />

            {/* Resume */}
            <label>Resume</label>

            {userData.resume ? (
              <button style={styles.resumeBtn} onClick={openResume}>
                View Resume
              </button>
            ) : (
              <p>No Resume Uploaded</p>
            )}

            {/* Buttons */}
            <div style={styles.buttonGroup}>

              {!editMode && (
                <button style={styles.editBtn} onClick={() => setEditMode(true)}>
                  Edit Profile
                </button>
              )}

              {editMode && (
                <button style={styles.saveBtn} onClick={handleUpdate}>
                  Save Changes
                </button>
              )}

            </div>

          </div>

        </div>

        {/* ✅ NEW SECTION: APPLIED JOBS */}
        <div style={styles.appliedSection}>

          <h2>Applied Jobs</h2>

          {applications.length === 0 ? (

            <p>No Applications Yet</p>

          ) : (

            <div style={styles.jobGrid}>

              {applications.map((app, index) => (

                <div key={index} style={styles.jobCard}>

                  <h3>{app.jobTitle}</h3>
                  <p>{app.company}</p>

                  <p>
                    Status: 
                    <span style={{
                      color:
                        app.status === "accepted"
                          ? "green"
                          : app.status === "rejected"
                          ? "red"
                          : "orange",
                      fontWeight:"bold",
                      marginLeft:"5px"
                    }}>
                      {app.status}
                    </span>
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </motion.div>

    </div>

  );

}

export default Profile;


/* ================= STYLES ================= */

const styles = {

  page:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(120deg,#4facfe,#00f2fe)",
    padding:"40px"
  },

  container:{
    width:"900px",
    background:"white",
    borderRadius:"15px",
    padding:"40px",
    boxShadow:"0 15px 35px rgba(0,0,0,0.2)"
  },

  title:{
    textAlign:"center",
    marginBottom:"30px",
    fontSize:"28px"
  },

  profileGrid:{
    display:"flex",
    gap:"40px"
  },

  imageSection:{
    flex:"1",
    textAlign:"center"
  },

  avatar:{
    width:"160px",
    height:"160px",
    borderRadius:"50%",
    background:"linear-gradient(135deg,#2563eb,#7c3aed)",
    color:"white",
    fontSize:"48px",
    fontWeight:"bold",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"auto"
  },

  infoSection:{
    flex:"2",
    display:"flex",
    flexDirection:"column",
    gap:"10px"
  },

  input:{
    padding:"10px",
    borderRadius:"6px",
    border:"1px solid #ccc"
  },

  resumeBtn:{
    padding:"10px",
    background:"#4facfe",
    color:"white",
    border:"none",
    borderRadius:"6px",
    width:"150px",
    cursor:"pointer"
  },

  buttonGroup:{
    marginTop:"20px"
  },

  editBtn:{
    padding:"10px 20px",
    background:"#ff9800",
    color:"white",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer"
  },

  saveBtn:{
    padding:"10px 20px",
    background:"#4caf50",
    color:"white",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer"
  },

  /* ✅ NEW STYLES */
  appliedSection:{
    marginTop:"40px"
  },

  jobGrid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
    gap:"20px",
    marginTop:"20px"
  },

  jobCard:{
    background:"#f9fafb",
    padding:"15px",
    borderRadius:"10px",
    boxShadow:"0 5px 15px rgba(0,0,0,0.05)"
  }

};