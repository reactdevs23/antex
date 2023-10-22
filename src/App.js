import { Route, Routes } from "react-router-dom";
import BuyBstModal from "./components/Popups/BuyBstModal/BuyBstModal";
import Navbar from "./components/Navbar/Navbar";
import AirDrop from "./pages/AirDrops/AirDrops";
import LandingPage from "./pages/LandingPage/LandingPage";
import LaunchPad from "./pages/LaunchPad/LaunchPad";
import TokenInfo from "./components/Launchpad/Info/TokenInfo/TokenInfo";

import Staking from "./pages/Staking/Staking";
import Footer from "./components/Footer/Footer";
import VestingDashBoard from "./pages/VestingDashBoard/VestingDashBoard";
import Activities from "./pages/Activities/Activities";
import "@splidejs/react-splide/css";
import "react-datepicker/dist/react-datepicker.css";
import Dashboard from "./components/Activities/Dashboard/Dashboard";
import { useDataContext } from "./components/Context";
import ActivitiesHistory from "./components/Activities/ActivitiesHistory/ActivitiesHistory";
import LeaderBoard from "./components/Activities/LeaderBoard/LeaderBoard";
import WalletNotConnected from "./components/Popups/WalletNotConnected/WalletNotConnected";
import NoVestingForThisWallet from "./components/Popups/NoVestingForThisWallet/NoVestingForThisWallet";

function App() {
  const {
    showBuyBstModal,
    walletConnected,
    vestingForThisWallet,
    showNoVestingForThisWallet,
    showWalletNotConnectedModal,
  } = useDataContext();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Staking />} />
        <Route path="/launchpad" element={<LaunchPad />} />
        <Route path="/vestingdashoboard" element={<VestingDashBoard />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/staking-dashboard" element={<Dashboard />} />
        <Route path="/activitiesHistory" element={<ActivitiesHistory />} />

        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
      <Footer />

      {showBuyBstModal && <BuyBstModal />}
      {!walletConnected && showWalletNotConnectedModal && (
        <WalletNotConnected />
      )}
      {!vestingForThisWallet && showNoVestingForThisWallet && (
        <NoVestingForThisWallet />
      )}
    </>
  );
}
// <Routes>
//       <Route path="/" element={<Navigate to="billing" />} />
//       <Route path="/billing" element={<Billing />} />{" "}
//       <Route path="/invoices" element={<Invoices />} />
//       <Route path="/members" element={<Members />} />
//       <Route path="/apikeys" element={<ApiKeys />} />
//       <Route path="/referrals" element={<Referrel />} />
//       <Route path="/settings" element={<Settigs />} />
//     </Routes>

export default App;
