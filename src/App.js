import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import JobDetails from "./pages/JobDetails";
import JobPost from "./pages/JobPost";
import JobList from "./pages/JobList";
import ApplyJob from "./pages/ApplyJob";

import AdminDashboard from "./pages/Admin/AdminDashboard";

function Layout() {

  const location = useLocation();

  // Pages where Navbar & Footer should be hidden
  const hideLayoutPages = ["/", "/login", "/register", "/admin"];

  const hideNavbarFooter = hideLayoutPages.includes(location.pathname);

  return (
    <>
      {/* Navbar */}
      {!hideNavbarFooter && <Navbar />}

      <div className="main-content">
        <Routes>

          {/* Default Page */}
          <Route path="/" element={<Login />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Public Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobdetails" element={<JobDetails />} />

          {/* Protected Pages */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/post-job"
            element={
              <PrivateRoute>
                <JobPost />
              </PrivateRoute>
            }
          />

          <Route
            path="/apply"
            element={
              <PrivateRoute>
                <ApplyJob />
              </PrivateRoute>
            }
          />

          {/* Admin Page */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

        </Routes>
      </div>

      {/* Footer */}
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;