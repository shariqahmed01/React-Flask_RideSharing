import { useState } from "react";
import Map, { Marker } from "react-map-gl";

const RideBooking = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleRequestRide = () => {
    alert(`Ride requested from ${pickup} to ${dropoff}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl my-4">Request a Ride</h2>
      <input
        type="text"
        placeholder="Pickup Location"
        onChange={(e) => setPickup(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="text"
        placeholder="Drop-off Location"
        onChange={(e) => setDropoff(e.target.value)}
        className="border p-2 mb-2"
      />
      <button
        onClick={handleRequestRide}
        className="bg-green-500 text-white px-4 py-2"
      >
        Request Ride
      </button>

      <div className="w-full h-96 mt-4">
        <Map
          initialViewState={{
            latitude: 37.7749,
            longitude: -122.4194,
            zoom: 12,
          }}
          style={{ width: "100%", height: "100%" }}
          mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker latitude={37.7749} longitude={-122.4194} />
        </Map>
      </div>
    </div>
  );
};

export default RideBooking;
