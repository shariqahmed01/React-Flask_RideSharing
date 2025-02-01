import { useEffect, useRef, useState } from "react";
import RideDetailsModal from "../components/RideDetailsModal";
import "../styles/driverDashboard.css";

const DriverDashboard = () => {
  const mapRef = useRef(null);
  const [rideRequests, setRideRequests] = useState([
    {
      id: 1,
      passengerName: "Alice Johnson",
      pickup: { lat: 40.7128, lng: -74.006 },
      dropoff: { lat: 40.73061, lng: -73.935242 },
      fare: "$12.50",
      distance: "3.2 miles",
      timeEstimate: "10 min",
    },
  ]);
  const [selectedRide, setSelectedRide] = useState(null);

  useEffect(() => {
    if (!mapRef.current) {
      const platform = new H.service.Platform({
        apikey: "V3_ZXbMi14ulTtrvp9qN2QtDCKm13tk14agfp2yQRy4", // Replace with your valid HERE Maps API key
      });

      const defaultLayers = platform.createDefaultLayers();
      const map = new H.Map(
        document.getElementById("here-map"),
        defaultLayers.vector.normal.map,
        {
          center: { lat: 40.7128, lng: -74.006 },
          zoom: 12,
        }
      );

      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      mapRef.current = { map, behavior, ui };
      updateMapMarkers(map);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRequest = {
        id: Math.floor(Math.random() * 1000),
        passengerName: `Passenger ${Math.floor(Math.random() * 100)}`,
        pickup: {
          lat: 40.7128 + Math.random() * 0.02 - 0.01,
          lng: -74.006 + Math.random() * 0.02 - 0.01,
        },
        dropoff: {
          lat: 40.73061 + Math.random() * 0.02 - 0.01,
          lng: -73.935242 + Math.random() * 0.02 - 0.01,
        },
        fare: `$${(Math.random() * 20 + 5).toFixed(2)}`,
        distance: `${(Math.random() * 10 + 1).toFixed(1)} miles`,
        timeEstimate: `${Math.floor(Math.random() * 30) + 5} min`,
      };

      setRideRequests((prevRequests) => [...prevRequests, newRequest]);
      notifyDriver(newRequest);
    }, 10000); // Add new request every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const updateMapMarkers = (map) => {
    rideRequests.forEach((ride) => {
      const marker = new H.map.Marker(ride.pickup);
      marker.setData(ride);
      map.addObject(marker);

      marker.addEventListener("tap", (evt) => {
        setSelectedRide(evt.target.getData());
      });
    });
  };

  const notifyDriver = (newRequest) => {
    alert(`New Ride Request from ${newRequest.passengerName}`);
    const sound = new Audio("src/sounds/notification.mp3");
    sound.play();
  };

  const handleAccept = (id) => {
    alert(`Ride ${id} accepted!`);
    setSelectedRide(null);
    setRideRequests((prev) => prev.filter((ride) => ride.id !== id));
  };

  const handleReject = (id) => {
    alert(`Ride ${id} rejected.`);
    setSelectedRide(null);
    setRideRequests((prev) => prev.filter((ride) => ride.id !== id));
  };

  return (
    <div className="dashboard-container">
      <div id="here-map" className="map-container"></div>
      {selectedRide && (
        <RideDetailsModal
          ride={selectedRide}
          onAccept={handleAccept}
          onReject={handleReject}
          onClose={() => setSelectedRide(null)}
        />
      )}
    </div>
  );
};

export default DriverDashboard;
