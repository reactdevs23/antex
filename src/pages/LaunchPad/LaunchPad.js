import React from "react";
import styles from "./LaunchPad.module.css";
import Info from "../../components/Launchpad/Info/Info";
import Hero from "../../components/Launchpad/Hero/Hero";
import SaleRoadMap from "../../components/Launchpad/SaleRoadmap/SaleRoadmap";
// import Register from "../../components/Register/Register";import React from "react";
//import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import SupportedChain from "../../components/LandingPage/SupportedChain/SupportedChain";

import Achivement from "../../components/LandingPage/Achivement/Achivement";
import ParticipateInSales from "../../components/LandingPage/ParticipateInSales/ParticipateInSales";

import LaunchProject from "../../components/LandingPage/LaunchProject/LaunchProject";

import Partners from "../../components/LandingPage/Partners/Partners";

import LiveAndNextSales from "../../components/Launchpad2/LiveAndNextSales/LiveAndNextSales";
import CompletedProjects from "../../components/Launchpad2/CompletedProjects/CompletedProjects";
import UpComingAndOngoing from "../../components/Launchpad2/UpComingAndOngoing/UpComingAndOngoing";
import Register from "../../components/Register/Register";
import DidYouKnow from "../../components/Launchpad2/DidYouKnow/DidYouKnow";
import HeroSection from "../../components/Launchpad2/HeroSection/HeroSection";
const LaunchPad = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div>
        <HeroSection />
        <div className={styles.achivementAndSupportedChain}>
          <SupportedChain />
          <Achivement />
        </div>{" "}
      </div>
      <ParticipateInSales />
      <LiveAndNextSales />
      <UpComingAndOngoing />
      <CompletedProjects />
      <LaunchProject />
      <Register />
      <Partners /> */}

      <Hero />
      <SaleRoadMap />
      <Info />
      <DidYouKnow />
      <LaunchProject />
      <Register />
    </div>
  );
};

export default LaunchPad;
