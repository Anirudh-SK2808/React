import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "volunteer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: "#2ecc71", minHeight: "100vh", width: "100vw" }}>
      <div className="col-md-6 col-lg-4">
        <div className="card signup-card shadow p-4" style={{ background: "rgba(255, 255, 255, 0.9)", borderRadius: "15px" }}>
          <h2 className="text-center mb-4">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">I want to join as:</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="role" id="volunteer" value="volunteer" checked={formData.role === "volunteer"} onChange={handleChange} />
                <label className="form-check-label" htmlFor="volunteer">Volunteer</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="role" id="campaigner" value="campaigner" checked={formData.role === "campaigner"} onChange={handleChange} />
                <label className="form-check-label" htmlFor="campaigner">Campaigner</label>
              </div>
            </div>
            <button type="submit" className="btn w-100 mb-3" style={{ backgroundColor: "#27ae60", borderColor: "#219a52", color: "white" }}>Sign Up</button>
          </form>
          <div className="text-center">
            <p className="mb-0">Already have an account? <a href="login.html">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
