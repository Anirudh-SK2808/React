import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 sidebar p-3" style={{ backgroundColor: "#2ecc71", minHeight: "100vh" }}>
          <h4 className="text-white mb-4">Campaigner Portal</h4>
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

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Campaign Manager</h2>
            <button className="btn btn-success">Create New Campaign</button>
          </div>

          {/* Stats Cards */}
          <div className="row mb-4">
            {[
              { title: "Active Campaigns", value: "5", color: "success" },
              { title: "Total Volunteers", value: "127", color: "info" },
              { title: "Hours Logged", value: "456", color: "warning" },
              { title: "Success Rate", value: "92%", color: "primary" },
            ].map((stat, index) => (
              <div key={index} className="col-md-3">
                <div className={`card bg-${stat.color} text-white`}>
                  <div className="card-body">
                    <h5 className="card-title">{stat.title}</h5>
                    <h2>{stat.value}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="mb-3">Active Campaigns</h4>
          <div className="row g-4">
            {[
              {
                title: "Park Cleanup",
                description: "Monthly cleanup initiative at Tower Park",
                duration: "3 months",
                progress: 75,
              },
              {
                title: "Tree Planting Drive in Sholinganallur",
                description: "Community tree planting initiative",
                duration: "2 months",
                progress: 45,
              },
            ].map((campaign, index) => (
              <div key={index} className="col-md-6">
                <div className="card campaign-card h-100" style={{ transition: "transform 0.3s" }}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{campaign.title}</h5>
                      <span className="badge bg-success">Active</span>
                    </div>
                    <p className="card-text">{campaign.description}</p>
                    <div className="mb-3 text-muted">
                      <div>Duration: {campaign.duration}</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" style={{ width: `${campaign.progress}%` }}>
                        {campaign.progress}% Complete
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <a href="#" className="btn btn-success">Manage</a>
                      <a href="#" className="btn btn-outline-success">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;