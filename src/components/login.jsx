import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }
    setError("");
    console.log("Logging in with:", { username, password });
    // Add authentication logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-600 bg-opacity-70">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-center text-2xl font-semibold mb-4">Welcome Back</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-gray-500 text-sm">Forgot password?</a>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="text-gray-700 text-sm">
            Don't have an account? <a href="/signup" className="text-green-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;