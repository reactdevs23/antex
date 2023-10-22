import React from "react";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import SupportedChain from "../../components/LandingPage/SupportedChain/SupportedChain";
import styles from "./LandingPage.module.css";
import Achivement from "../../components/common/Achivement/Achivement";
import ParticipateInSales from "../../components/LandingPage/ParticipateInSales/ParticipateInSales";
import UpComingProjects from "../../components/LandingPage/UpcomingProjects/UpcomingProjects";
import PeopleFirst from "../../components/LandingPage/PeopleFirst/PeopleFirst";
import LaunchProject from "../../components/LandingPage/LaunchProject/LaunchProject";
import DidYouKnow from "../../components/LandingPage/DidYouKnow/DidYouKnow";
import Partners from "../../components/common/Partners/Partners";
import CompletedProjects from "../../components/LandingPage/CompletedProjects/CompletedProjects";
import MoreThanLaunchPad from "../../components/LandingPage/MoreThanLaunchPad/MoreThanLaunchPad";
import GovernanceAndProjectProposal from "../../components/LandingPage/GovernanceAndProjectProposal/GovernanceAndProjectProposal";
import DeeperIntoOurEcosystem from "../../components/LandingPage/DeeperIntoOurEcosystem/DeeperIntoOurEcosystem";
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.achivementAndSupportedChain}>
        <SupportedChain />
        <Achivement />
      </div>
      <div className={styles.wrapper}>
        <MoreThanLaunchPad />
        <ParticipateInSales />
        <UpComingProjects />
        <PeopleFirst />
        <LaunchProject />
        <CompletedProjects />
        <GovernanceAndProjectProposal />
        <DidYouKnow />
        <DeeperIntoOurEcosystem />
        <Partners />
      </div>
    </>
  );
};

export default LandingPage;
