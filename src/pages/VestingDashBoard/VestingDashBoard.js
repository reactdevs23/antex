import React from "react";
import HeroSection from "../../components/VestingDashboard/HeroSection/HeroSection";
import ProjectInfoAndCounter from "../../components/common/ProjectInfoAndCounter/ProjectInfoAndCounter";
import styles from "./VestingDashBoard.module.css";
import Projects from "../../components/VestingDashboard/Projects/Projects";
import LaunchProject from "../../components/LandingPage/LaunchProject/LaunchProject";
import SubsCriber from "../../components/common/Subscriber/Subcriber";

const VestingDashBoard = () => {
  return (
    <div className={styles.wrapper}>
      <HeroSection />
      <div className={styles.marginTop}>
        <ProjectInfoAndCounter />
      </div>
      <Projects />
      <LaunchProject />
      <SubsCriber />
    </div>
  );
};

export default VestingDashBoard;
