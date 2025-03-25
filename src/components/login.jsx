import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: "#2ecc71", minHeight: "100vh", width: "100vw" }}>
      <div className="col-md-6 col-lg-4">
        <div className="card login-card shadow p-4" style={{ background: "rgba(255, 255, 255, 0.9)", borderRadius: "15px" }}>
          <h2 className="text-center mb-4">Welcome Back</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <button type="submit" className="btn w-100 mb-3" style={{ backgroundColor: "#27ae60", borderColor: "#219a52", color: "white" }}>Login</button>
            <div className="text-center">
              <a href="#" className="text-muted">Forgot password?</a>
            </div>
          </form>
          <hr />
          <div className="text-center">
            <p className="mb-0">Don't have an account? <a href="signup.html">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
