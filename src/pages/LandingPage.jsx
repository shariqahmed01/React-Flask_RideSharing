import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Welcome to Ride Sharing App</h1>
      <Link to="/passenger-login" className="mb-2 bg-blue-500 text-white px-4 py-2">
        Passenger Login
      </Link>
      <Link to="/driver-login" className="bg-green-500 text-white px-4 py-2">
        Driver Login
      </Link>
    </div>
  );
};

export default LandingPage;
