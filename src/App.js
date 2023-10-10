import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AirDrop from "./pages/AirDrops/AirDrops";
import LandingPage from "./pages/LandingPage/LandingPage";
import LaunchPad from "./pages/LaunchPad/LaunchPad";
import TokenInfo from "./components/Launchpad/Info/TokenInfo/TokenInfo";

import Staking from "./pages/Staking/Staking";
import Footer from "./components/Footer/Footer";
import VestingDashBoard from "./pages/VestingDashBoard/VestingDashBoard";
import Activities from "./pages/Activities/Activities";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AirDrop />} />
        <Route path="/vestingDashboard" element={<VestingDashBoard />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
