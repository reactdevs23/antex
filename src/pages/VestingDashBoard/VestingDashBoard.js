import React from "react";
import styles from "./VestingDashBoard.module.css";
import HeroSection from "../../components/VestingDashboard/HeroSection/HeroSection";
import ProjectInfoAndCounter from "../../components/VestingDashboard/ProjectInfoAndCounter/ProjectInfoAndCounter";
const VestingDashBoard = () => {
  return (
    <div>
      <HeroSection />
      <ProjectInfoAndCounter />
    </div>
  );
};

export default VestingDashBoard;
