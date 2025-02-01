import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PassengerLogin from "./pages/PassengerLogin";
import DriverLogin from "./pages/DriverLogin";
import RideBooking from "./pages/RideBooking";
import DriverDashboard from "./pages/DriverDashboard";
import LandingPage from "./pages/LandingPage";
import PassengerSignup from "./pages/PassengerSignup";
import DriverSignup from "./pages/DriverSignup";
import DriverProfile from "./pages/DriverProfile";




const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/passenger-login" element={<PassengerLogin />} />
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/ride-booking" element={<RideBooking />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/passenger-signup" element={<PassengerSignup />} />
        <Route path="/driver-signup" element={<DriverSignup />} />
        <Route path="/driver-profile" element={<DriverProfile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
