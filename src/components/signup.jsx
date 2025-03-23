import { useState } from "react";

export default function Signup() {
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
    <div className="flex items-center justify-center min-h-screen bg-green-500 bg-opacity-90">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-center text-2xl font-bold mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" className="input-field" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="input-field" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" className="input-field" value={formData.phone} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="input-field" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input-field" value={formData.confirmPassword} onChange={handleChange} required />

          <div className="mb-3">
            <label className="block text-sm font-medium">I want to join as:</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center">
                <input type="radio" name="role" value="volunteer" checked={formData.role === "volunteer"} onChange={handleChange} className="mr-2" />
                Volunteer
              </label>
              <label className="flex items-center">
                <input type="radio" name="role" value="campaigner" checked={formData.role === "campaigner"} onChange={handleChange} className="mr-2" />
                Campaigner
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Sign Up</button>
        </form>
        <p className="text-center mt-4 text-sm">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
}