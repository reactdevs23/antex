import React from "react";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import SupportedChain from "../../components/LandingPage/SupportedChain/SupportedChain";
import styles from "./LandingPage.module.css";
import Achivement from "../../components/LandingPage/Achivement/Achivement";
import ParticipateInSales from "../../components/LandingPage/ParticipateInSales/ParticipateInSales";
import PeopleFirst from "../../components/LandingPage/PeopleFirst/PeopleFirst";
import LaunchProject from "../../components/LandingPage/LaunchProject/LaunchProject";
import DidYouKnow from "../../components/LandingPage/DidYouKnow/DidYouKnow";
import Partners from "../../components/LandingPage/Partners/Partners";
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.achivementAndSupportedChain}>
        <SupportedChain />
        <Achivement />
      </div>
      <ParticipateInSales />
      <PeopleFirst />
      <LaunchProject />
      <DidYouKnow />
      <Partners />
    </>
  );
};

export default LandingPage;
