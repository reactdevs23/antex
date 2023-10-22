import React from "react";

import SupportedChain from "../../components/LandingPage/SupportedChain/SupportedChain";

import Achivement from "../../components/common/Achivement/Achivement";
import ParticipateInSales from "../../components/LandingPage/ParticipateInSales/ParticipateInSales";

import LaunchProject from "../../components/LandingPage/LaunchProject/LaunchProject";

import Partners from "../../components/common/Partners/Partners";

import LiveAndNextSales from "../../components/INOLaunchpad/LiveAndNextSales/LiveAndNextSales";
import CompletedProjects from "../../components/INOLaunchpad/CompletedProjects/CompletedProjects";
import UpComingAndOngoing from "../../components/INOLaunchpad/UpComingAndOngoing/UpComingAndOngoing";
import SubsCriber from "../../components/common/Subscriber/Subcriber";
import DidYouKnow from "../../components/Launchpad/DidYouKnow/DidYouKnow";
import HeroSection from "../../components/INOLaunchpad/HeroSection/HeroSection";
import styles from "./INOLaunchpad.module.css";
const INOLaunchPad = () => {
  return (
    <div className={styles.wrapper}>
      <div>
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
      <DidYouKnow />
      <LaunchProject />
      <SubsCriber />
      <Partners />
    </div>
  );
};

export default INOLaunchPad;
