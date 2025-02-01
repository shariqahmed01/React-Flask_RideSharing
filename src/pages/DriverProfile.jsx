import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/driverProfile.css";

const DriverProfile = () => {
  const [isOnline, setIsOnline] = useState(true);
  const navigate = useNavigate();

  const toggleAvailability = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className="profile-container">
      <h2>Driver Profile</h2>

      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="src\assets\profile.png"
          alt="Driver Avatar"
          className="profile-image"
        />
        <h3>John Doe</h3>
        <p>john.doe@example.com</p>
      </div>

      {/* Vehicle Information */}
      <div className="vehicle-section">
        <h3>Vehicle Details</h3>
        <p><strong>Make:</strong> Toyota</p>
        <p><strong>Model:</strong> Prius</p>
        <p><strong>Plate Number:</strong> ABC-1234</p>
      </div>

      {/* Availability Toggle */}
      <div className="availability-section">
        <h3>Availability</h3>
        <button className={`toggle-btn ${isOnline ? "online" : "offline"}`} onClick={toggleAvailability}>
          {isOnline ? "Online" : "Offline"}
        </button>
      </div>

      {/* Ratings & Reviews */}
      <div className="ratings-section">
        <h3>Ratings & Reviews</h3>
        <p>⭐ 4.8 (120 reviews)</p>
        <button className="view-reviews-btn">View Reviews</button>
      </div>

      {/* Contact Support */}
      <div className="support-section">
        <button className="contact-support-btn">Contact Support</button>
      </div>

      {/* Back to Dashboard Button */}
      <button className="dashboard-btn" onClick={() => navigate("/driver-dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default DriverProfile;
