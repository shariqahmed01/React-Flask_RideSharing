import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const PassengerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "passenger@test.com" && password === "password123") {
      alert("Login successful!");
      navigate("/ride-booking");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Section with Individual Image */}
      <div
        className="left-section"
        style={{
          background: "url('src/assets/passanger.jpg') no-repeat center center/cover",
        }}
      >
        <div className="content">
          <h1>Welcome Back</h1>
          <p>Join us for a seamless ride experience.</p>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <div className="form-container">
          <h2>Passenger Login</h2>
          <p>
            Don’t have an account?{" "}
            <span className="link" onClick={() => navigate("/passenger-signup")}>
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

export default PassengerLogin;
