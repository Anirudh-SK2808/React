import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Remove duplicate import

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="col-md-3 col-lg-2 sidebar p-3 bg-dark text-white d-flex flex-column h-100">
      <h4 className="mb-4">Admin Portal</h4>
      <div className="nav flex-column flex-grow-1">
        <button className="btn btn-dark text-start w-100" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn btn-dark text-start w-100" onClick={() => navigate("/admin")}>
          Dashboard
        </button>
        <button className="btn btn-dark text-start w-100" onClick={() => navigate("/campaign")}>
          Campaign Review
        </button>
        <button className="btn btn-dark text-start w-100" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn btn-dark text-start w-100" onClick={() => navigate("/signup")}>
          Signup
        </button>
        <button className="btn btn-dark text-start w-100" onClick={() => navigate("/volunteer")}>
          Volunteer
        </button>
      </div>
      <button className="btn btn-danger text-start w-100 mt-auto" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
};









const StatusCard = ({ title, value, info, bgColor }) => {
  return (
    <div className={`col-md-3`}>
      <div className={`card text-white status-card bg-${bgColor}`}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h2>{value}</h2>
          <small>{info}</small>
        </div>
      </div>
    </div>
  );
};

const UserTable = () => {
  const users = [
    { name: "Arvin Samuel A", role: "Volunteer", joined: "Jan 15, 2025" },
    { name: "Guardians of Mother Nature", role: "Campaigner", joined: "Jan 12, 2025" }
  ];

  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">User Management</h5>
        <input type="search" className="form-control form-control-sm" placeholder="Search users..." />
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.joined}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">View</button>
                    <button className="btn btn-sm btn-outline-danger">Flag</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-9 col-lg-10 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Admin Dashboard</h2>
            <button className="btn btn-outline-primary">Generate Report</button>
          </div>
          <div className="row mb-4">
            <StatusCard title="Total Users" value="1,234" info="↑ 12% this month" bgColor="primary" />
            <StatusCard title="Active Campaigns" value="45" info="↑ 8% this month" bgColor="success" />
            <StatusCard title="Pending Reviews" value="23" info="5 urgent" bgColor="warning" />
            <StatusCard title="System Health" value="98%" info="All systems operational" bgColor="info" />
          </div>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
