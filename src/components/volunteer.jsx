import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  { title: "Adyar River Cleanup", deadline: "1 March", progress: 75 },
  { title: "Tree Planting in Retteri", deadline: "10 March", progress: 45 },
  { title: "Recycling Program in Pallikaranai Marshland", deadline: "14 March", progress: 30 },
];

const Sidebar = () => (
  <div className="col-md-3 col-lg-2 sidebar p-3 bg-success text-white">
    <h4 className="mb-4">Volunteer Portal</h4>
    <div className="nav flex-column">
        <button className="btn btn-dark text-white text-start nav-link" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn btn-dark text-white text-start nav-link" onClick={() => navigate("/admin")}>
          Dashboard
        </button>
        <button className="btn btn-dark text-white text-start nav-link" onClick={() => navigate("/campaign")}>
          Campaign Review
        </button>
        <button className="btn btn-dark text-white text-start nav-link" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn btn-dark text-white text-start nav-link" onClick={() => navigate("/signup")}>
          Signup
        </button>
        <button className="btn btn-dark text-white text-start nav-link" onClick={() => navigate("/volunteer")}>
          Volunteer
        </button>
        <button className="btn btn-danger text-white text-start nav-link mt-auto" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
  </div>
);

const StatsCards = () => (
  <div className="row mb-4">
    {[{ title: "Active Projects", value: 3, bg: "success" },
      { title: "Hours Contributed", value: 24, bg: "info" },
      { title: "Impact Score", value: 850, bg: "warning" }].map((stat, index) => (
        <div className="col-md-4" key={index}>
          <div className={`card bg-${stat.bg} text-white`}>
            <div className="card-body">
              <h5 className="card-title">{stat.title}</h5>
              <h2>{stat.value}</h2>
            </div>
          </div>
        </div>
    ))}
  </div>
);

const ProjectCard = ({ title, deadline, progress }) => (
  <div className="col-md-6 col-lg-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Deadline: {deadline}</p>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{ width: `${progress}%` }}>{progress}% Complete</div>
        </div>
        <a href="#" className="btn btn-success">View Details</a>
      </div>
    </div>
  </div>
);

const VolunteerDashboard = () => (
  <div className="container-fluid">
    <div className="row">
      <Sidebar />
      <div className="col-md-9 col-lg-10 p-4">
        <h2 className="mb-4">Welcome, Volunteer!</h2>
        <StatsCards />
        <h4 className="mb-3">Your Active Projects</h4>
        <div className="row g-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default VolunteerDashboard;
