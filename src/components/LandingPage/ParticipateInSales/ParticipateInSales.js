import React from "react";
import styles from "./ParticipateInSales.module.css";
import { buy, lock, purchase, registration } from "../../../images";

const ParticipateInSales = () => {
  const data = [
    {
      img: buy,
      info: "Buy  and hold Bullshark token",
      button: { text: "Buy $BST", to: "" },
    },
    {
      img: lock,
      info: "Lock your $BST token to qualify to register",
      button: { text: "Go to Staking", to: "" },
    },
    {
      img: registration,
      info: "Complete the registration process",
      button: { text: "upcoming Sales", to: "" },
    },
    {
      img: purchase,
      info: "Purchase  and claim your token.",
      button: { text: "Go to Vesting", to: "" },
    },
  ];
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <h2 className={styles.heading}>Steps to participate in Sales</h2>

      <div className={styles.cards}>
        {data.map((el, i) => (
          <div className={styles.card} key={i}>
            <p className={styles.id}>{i + 1}</p>
            <img src={el.img} alt="#" className={styles.image} />
            <p className={styles.info}>{el.info}</p>

            <button className={styles.button}>{el.button.text}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipateInSales;
