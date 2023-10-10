import React from "react";
import HeroSection from "../../components/VestingDashboard/HeroSection/HeroSection";
import ProjectInfoAndCounter from "../../components/common/ProjectInfoAndCounter/ProjectInfoAndCounter";
import styles from "./VestingDashBoard.module.css";
import Projects from "../../components/VestingDashboard/Projects/Projects";
import LaunchProject from "../../components/LandingPage/LaunchProject/LaunchProject";
import Register from "../../components/Register/Register";
const VestingDashBoard = () => {
  return (
    <div>
      <HeroSection />
      <div className={styles.marginTop}>
        <ProjectInfoAndCounter />
      </div>
      <Projects />
      <LaunchProject />
      <Register />
    </div>
  );
};

export default VestingDashBoard;
