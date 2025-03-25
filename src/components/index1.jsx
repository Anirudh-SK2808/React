import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="#">EnviroHelp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Campaigns</a></li>
              <li className="nav-item"><a className="nav-link" href="#login">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="#signup">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4 mb-4">Make a Difference in Your Community</h1>
          <p className="lead mb-4">Connect with environmental projects and volunteers in your area</p>
          <a href="#signup" className="btn btn-lg eco-primary text-white">Get Started</a>
        </div>
      </section>

      <section className="py-5" id="about">
        <div className="container">
          <h2 className="text-center mb-5">How It Works</h2>
          <div className="row g-4">
            {["Create Campaigns", "Connect", "Make Impact"].map((title, index) => (
              <div className="col-md-4" key={index}>
                <div className="card feature-card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <h3 className="h5 mb-3">{title}</h3>
                    <p>{title === "Create Campaigns" ? "Post your initiative and describe the help you need" : title === "Connect" ? "Find volunteers and organizations willing to support your cause" : "Work together to create positive environmental change"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-5" id="projects">
        <div className="container">
          <h2 className="text-center mb-5">Featured Campaigns</h2>
          <div className="row g-4">
            {["River Cleanup Initiative", "Community Tree Planting", "Recycling Education"].map((title, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{title === "River Cleanup Initiative" ? "Join our monthly river cleanup project to protect local wildlife." : title === "Community Tree Planting" ? "Help us plant 1000 trees in urban areas this season." : "Educate communities about proper recycling practices."}</p>
                    <a href="#login" className="btn eco-primary text-white">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>EnviroHelp</h5>
              <p>Connecting people for a greener future</p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
                <li className="list-inline-item"><a href="#" className="text-white">Terms of Service</a></li>
                <li className="list-inline-item"><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
