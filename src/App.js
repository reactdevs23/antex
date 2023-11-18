import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BuyBstModal from "./components/Popups/BuyBstModal/BuyBstModal";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import LaunchPad from "./pages/LaunchPad/LaunchPad";
import Staking from "./pages/Staking/Staking";
import Footer from "./components/Footer/Footer";
import VestingDashBoard from "./pages/VestingDashBoard/VestingDashBoard";
import Dashboard from "./pages/Dashboard/Dashboard";
import ActivitiesHistory from "./pages/ActivitiesHistory/ActivitiesHistory";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import WalletNotConnected from "./components/Popups/WalletNotConnected/WalletNotConnected";
import NoVestingForThisWallet from "./components/Popups/NoVestingForThisWallet/NoVestingForThisWallet";
import AirDrops from "./pages/AirDrops/AirDrops";
import INOLaunchPad from "./pages/INOLaunchpad/INOLaunchpad";
import "@splidejs/react-splide/css";
import "react-datepicker/dist/react-datepicker.css";
import { useDataContext } from "./components/Context";

function App() {
  const {
    showBuyBstModal,
    walletConnected,
    vestingForThisWallet,
    showNoVestingForThisWalletModal,
    showWalletNotConnectedModal,
  } = useDataContext();
  useEffect(() => {
    // Set body overflow based on the modal visibility
    document.body.style.overflow =
      showWalletNotConnectedModal ||
      showNoVestingForThisWalletModal ||
      showBuyBstModal
        ? "hidden"
        : "auto";

    // Cleanup function to reset body overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [
    showWalletNotConnectedModal,
    showNoVestingForThisWalletModal,
    showBuyBstModal,
  ]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/launchpad" element={<LaunchPad />} />
        <Route path="/ino-launchpad" element={<INOLaunchPad />} />
        <Route path="/airdrop" element={<AirDrops />} />
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
      {!vestingForThisWallet && showNoVestingForThisWalletModal && (
        <NoVestingForThisWallet />
      )}
    </>
  );
}

export default App;
