import React from "react";
import "../styles/rideDetailsModal.css";

const RideDetailsModal = ({ ride, onAccept, onReject, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Ride Details</h3>
        <p><strong>Passenger:</strong> {ride.passengerName}</p>
        <p><strong>Pickup:</strong> {ride.pickup.lat}, {ride.pickup.lng}</p>
        <p><strong>Drop-off:</strong> {ride.dropoff.lat}, {ride.dropoff.lng}</p>
        <p><strong>Fare:</strong> {ride.fare}</p>
        <p><strong>Distance:</strong> {ride.distance}</p>
        <p><strong>ETA:</strong> {ride.timeEstimate}</p>
        <div className="modal-buttons">
          <button className="accept-btn" onClick={() => onAccept(ride.id)}>Accept</button>
          <button className="reject-btn" onClick={() => onReject(ride.id)}>Reject</button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default RideDetailsModal;
