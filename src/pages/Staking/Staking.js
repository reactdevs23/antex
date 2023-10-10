import React from "react";
import AvailablePools from "../../components/Staking/AvailablePools/AvailablePools";
import ManageStaking from "../../components/Staking/ManageStaking/ManageStaking";

import Faq from "../../components/Staking/Faq/Faq";
import styles from "./Staking.module.css";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";

const Staking = () => {
  return (
    <div>
      <HeroSection />
      <AvailablePools />
      <ManageStaking />
      <Faq />
    </div>
  );
};

export default Staking;
