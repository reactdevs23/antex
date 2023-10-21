import React from "react";
import {
  claimingSystem,
  claimingSystemBg,
  protectedIdoo,
  protectedIdobg,
  governance,
  governanceBg,
  fair,
  fairBg,
} from "../../../images";
import styles from "./MoreThanLaunchPad.module.css";

const MoreThanLaunchPad = () => {
  const data = [
    { img: claimingSystem, bg: claimingSystemBg, title: "Claiming system" },
    { img: protectedIdoo, bg: protectedIdobg, title: "Protected IDOs" },
    { img: governance, bg: governanceBg, title: "Governance " },
    { img: fair, bg: fairBg, title: "Fair & Secure" },
  ];
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <div className={styles.card}>
        <h4 className={styles.title}>More than just a launchpad</h4>
        <p className={styles.info}>
          Our platform is a thriving ecosystem where innovation takes
          flight.With our comprehensive suite of support services, expert
          guidance, and Go-to-market solutions, we simplify your web3 journey
          into impactful realities and ensure your project’s success goes beyond
          launching, It's about defying gravity.{" "}
        </p>
        <button className={styles.button}>APPLY fOR LAUNCH</button>
      </div>
      <div className={styles.facilities}>
        {data.map((el, i) => (
          <div className={styles.box} key={i}>
            <img src={el.img} alt="protectedIdo" />
            <img className={styles.bg} src={el.bg} alt="protectedIdobg" />
            <h3 className={styles.name}>{el.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreThanLaunchPad;
