import React from "react";
import styles from "./LaunchPad.module.css";
import Info from "../../components/Launchpad/Info/Info";
import Hero from "../../components/Launchpad/Hero/Hero";
import SaleRoadMap from "../../components/Launchpad/SaleRoadmap/SaleRoadmap";
import LaunchProject from "../../components/LandingPage/LaunchProject/LaunchProject";
import SubsCriber from "../../components/common/Subscriber/Subcriber";
import DidYouKnow from "../../components/Launchpad/DidYouKnow/DidYouKnow";

const LaunchPad = () => {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <SaleRoadMap />
      <Info />
      <DidYouKnow />
      <LaunchProject />
      <SubsCriber />
    </div>
  );
};

export default LaunchPad;
