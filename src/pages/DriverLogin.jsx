import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // Ensure the CSS file is correctly linked

const DriverLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials (Replace with API later)
    if (email === "driver@test.com" && password === "password123") {
      localStorage.setItem("userType", "driver"); // Store user type
      alert("Login successful!");
      navigate("/driver-dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Section with Individual Image */}
      <div
        className="left-section"
        style={{
          backgroundImage: "url('/images/driver-login.jpg')",
        }}
      >
        <div className="content">
          <h1>Welcome Back, Driver</h1>
          <p>Manage your rides and earnings with ease.</p>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <div className="form-container">
          <h2>Driver Login</h2>
          <p>
            Don’t have an account?{" "}
            <span className="link" onClick={() => navigate("/driver-signup")}>
              Sign Up
            </span>
          </p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverLogin;
