import { useEffect, useRef, useState } from "react";
import "../styles/driverDashboard.css";

const DriverDashboard = () => {
  const mapRef = useRef(null);
  const routeLineRef = useRef(null);
  const [driverLocation, setDriverLocation] = useState(null);
  const [activeRide, setActiveRide] = useState(null);
  const [isRideStarted, setIsRideStarted] = useState(false);

  const rideRequests = [
    {
      id: 1,
      passengerName: "Alice Johnson",
      pickup: { lat: 40.748817, lng: -73.985428 }, // Empire State Building
      dropoff: { lat: 40.752726, lng: -73.977229 }, // Grand Central Terminal
      fare: "$12.50",
      distance: "1.2 miles",
      timeEstimate: "5 min",
    },
  ];

  useEffect(() => {
    if (!mapRef.current) {
      const platform = new H.service.Platform({
        apikey: "V3_ZXbMi14ulTtrvp9qN2QtDCKm13tk14agfp2yQRy4",
      });

      const defaultLayers = platform.createDefaultLayers();
      const map = new H.Map(
        document.getElementById("here-map"),
        defaultLayers.vector.normal.map,
        {
          center: { lat: 40.748817, lng: -73.985428 },
          zoom: 14,
        }
      );

      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      mapRef.current = { map, platform, behavior, ui };

      simulateDriverLocation();
    }
  }, []);

  const simulateDriverLocation = () => {
    const simulatedLocation = { lat: 40.7505, lng: -73.9934 }; // Near Times Square
    setDriverLocation(simulatedLocation);
    console.log("Simulated Driver Location:", simulatedLocation);

    if (mapRef.current) {
      const marker = new H.map.Marker(simulatedLocation);
      mapRef.current.map.addObject(marker);
      mapRef.current.map.setCenter(simulatedLocation);
    }
  };

  const acceptRide = (ride) => {
    setActiveRide(ride);
    updateRoute(ride.pickup);

    if (mapRef.current) {
      const pickupMarker = new H.map.Marker(ride.pickup);
      mapRef.current.map.addObject(pickupMarker);
    }
  };

  const updateRoute = (destination) => {
    if (!driverLocation) {
      console.warn("Driver location not available yet.");
      return;
    }

    const router = mapRef.current.platform.getRoutingService(null, 8);

    const routeRequestParams = {
      routingMode: "fast",
      transportMode: "car",
      origin: `${driverLocation.lat},${driverLocation.lng}`,
      destination: `${destination.lat},${destination.lng}`,
      return: "polyline,summary",
    };

    router.calculateRoute(
      routeRequestParams,
      (result) => {
        if (result.routes.length) {
          const route = result.routes[0];
          const lineString = new H.geo.LineString();

          route.sections.forEach((section) => {
            const decodedPolyline = H.geo.LineString.fromFlexiblePolyline(section.polyline);
            decodedPolyline.getLatLngAltArray().forEach((coord, index) => {
              if (index % 3 === 0) {
                lineString.pushLatLngAlt(coord, decodedPolyline.getLatLngAltArray()[index + 1], 0);
              }
            });
          });

          if (routeLineRef.current) {
            mapRef.current.map.removeObject(routeLineRef.current);
          }

          routeLineRef.current = new H.map.Polyline(lineString, {
            style: { strokeColor: "blue", lineWidth: 5 },
          });

          mapRef.current.map.addObject(routeLineRef.current);

          mapRef.current.map.getViewModel().setLookAtData({
            bounds: routeLineRef.current.getBoundingBox(),
          });

          console.log("Route displayed successfully.");
        } else {
          console.error("No routes found.");
        }
      },
      (error) => {
        console.error("Error calculating route:", error);
      }
    );
  };

  return (
    <div className="dashboard-container">
      <div id="here-map" className="map-container"></div>
      {!activeRide && (
        <div className="ride-requests">
          {rideRequests.map((ride) => (
            <div key={ride.id} className="ride-card">
              <h3>{ride.passengerName}</h3>
              <p>Pickup: {ride.pickup.lat}, {ride.pickup.lng}</p>
              <p>Drop-off: {ride.dropoff.lat}, {ride.dropoff.lng}</p>
              <p>Fare: {ride.fare}</p>
              <button onClick={() => acceptRide(ride)}>Accept Ride</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DriverDashboard;