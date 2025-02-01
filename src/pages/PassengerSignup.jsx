import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const PassengerSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    alert("Signup successful!");
    navigate("/passenger-login");
  };

  return (
    <div className="signup-container">
      {/* Left Section with Individual Image */}
      <div
        className="left-section"
        style={{
          background: "url('src/assets/passanger.jpg') no-repeat center center/cover",
        }}
      >
        <div className="content">
          <h1>Join Us</h1>
          <p>Experience the best rides with us.</p>
        </div>
      </div>

      {/* Right Section with Signup Form */}
      <div className="right-section">
        <div className="form-container">
          <h2>Create an account</h2>
          <p>
            Already have an account?{" "}
            <span className="link" onClick={() => navigate("/passenger-login")}>
              Log in
            </span>
          </p>
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default PassengerSignup;
