import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const DriverSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    alert("Signup successful!");
    navigate("/driver-login");
  };

  return (
    <div className="signup-container">
      {/* Left Section with Individual Image */}
      <div
        className="left-section"
        style={{
          background: "url('src/assets/driver.jpg') no-repeat center center/cover",
        }}
      >
        <div className="content">
          <h1>Join as a Driver</h1>
          <p>Start earning today by driving with us.</p>
        </div>
      </div>

      {/* Right Section with Signup Form */}
      <div className="right-section">
        <div className="form-container">
          <h2>Create an account</h2>
          <p>
            Already have an account?{" "}
            <span className="link" onClick={() => navigate("/driver-login")}>
              Log in
            </span>
          </p>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
          <div className="checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <span className="link">Terms & Conditions</span>
            </label>
          </div>
          <button className="signup-button" onClick={handleSignup}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverSignup;
