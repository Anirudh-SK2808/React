import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container">
      <a className="navbar-brand" href="#">EnviroHelp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
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
  </nav>
);

const HeroSection = () => (
  <section className="hero-section text-center text-white py-5" style={{
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/api/placeholder/1200/600')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
    <div className="container">
      <h1 className="display-4 mb-4">Make a Difference in Your Community</h1>
      <p className="lead mb-4">Connect with environmental projects and volunteers in your area</p>
      <a href="#" className="btn btn-lg text-white" style={{ backgroundColor: "#2ecc71" }}>Get Started</a>
    </div>
  </section>
);

const FeatureCard = ({ title, description }) => (
  <div className="col-md-4">
    <div className="card feature-card h-100 shadow-sm text-center p-4">
      <h3 className="h5 mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const AboutSection = () => (
  <section className="py-5" id="about">
    <div className="container">
      <h2 className="text-center mb-5">How It Works</h2>
      <div className="row g-4">
        <FeatureCard title="Create Campaigns" description="Post your environmental initiative and describe the help you need." />
        <FeatureCard title="Connect" description="Find volunteers and organizations willing to support your cause." />
        <FeatureCard title="Make Impact" description="Work together to create positive environmental change." />
      </div>
    </div>
  </section>
);

const CampaignCard = ({ title, description }) => (
  <div className="col-md-6 col-lg-4">
    <div className="card h-100 p-3">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href="#" className="btn text-white" style={{ backgroundColor: "#2ecc71" }}>Learn More</a>
    </div>
  </div>
);

const CampaignsSection = () => (
  <section className="bg-light py-5" id="projects">
    <div className="container">
      <h2 className="text-center mb-5">Featured Campaigns</h2>
      <div className="row g-4">
        <CampaignCard title="River Cleanup Initiative" description="Join our monthly river cleanup project to protect local wildlife." />
        <CampaignCard title="Community Tree Planting" description="Help us plant 1000 trees in urban areas this season." />
        <CampaignCard title="Recycling Education" description="Educate communities about proper recycling practices." />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <div className="container text-center">
      <p>&copy; 2024 EnviroHelp. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <CampaignsSection />
    <Footer />
  </>
);

export default App;