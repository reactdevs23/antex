import { Route, Routes } from "react-router-dom";
import AirDrop from "./pages/AirDrops/AirDrops";
import LandingPage from "./pages/LandingPage/LandingPage";
import LaunchPad from "./pages/LaunchPad/LaunchPad";
import TokenInfo from "./components/Launchpad/Info/TokenInfo/TokenInfo";

import Staking from "./pages/Staking/Staking";
import Footer from "./components/Footer/Footer";
import VestingDashBoard from "./pages/VestingDashBoard/VestingDashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchPad />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
