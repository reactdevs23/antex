import React from "react";
import { MdOutlineClose } from "react-icons/md";

import styles from "./BuyBstModal.module.css";
import { useDataContext } from "../../Context";
import {
  bybtLogo,
  mexc1Logo,
  mexc2Logo,
  mexc3Logo,
  uniswapLogo,
} from "../../../images";

const BuyBstModal = () => {
  const { setShowBuyBstModal } = useDataContext();
  return (
    <>
      <div className={[styles.wrapper, "overflow"].join(" ")}>
        <div className={styles.header}>
          <div
            className={styles.closeContainer}
            onClick={() => setShowBuyBstModal(false)}
          >
            <MdOutlineClose className={styles.close} />{" "}
          </div>{" "}
          <h3 className={styles.title}>
            Where you can <br /> buy $BST
          </h3>
        </div>
        <div className={[styles.boxWrapper].join(" ")}>
          <div className={styles.box}>
            <img src={uniswapLogo} alt="#" className={styles.logo} />
            <button className={styles.button}>buy on Uniswap</button>
          </div>
          <div className={styles.box}>
            <img src={bybtLogo} alt="#" className={styles.logo} />
            <button className={styles.button}>buy on BYBT</button>
          </div>
          <div className={styles.box}>
            <img src={mexc1Logo} alt="#" className={styles.logo} />
            <button className={styles.button}>buy on mexc</button>
          </div>
          <div className={styles.box}>
            <img src={mexc2Logo} alt="#" className={styles.logo} />
            <button className={styles.button}>buy on mexc</button>
          </div>
          <div className={styles.box}>
            <img src={mexc3Logo} alt="#" className={styles.logo} />
            <button className={styles.button}>buy on mexc</button>
          </div>
        </div>
      </div>
      <div
        className={styles.overlay}
        onClick={() => setShowBuyBstModal(false)}
      ></div>
    </>
  );
};

export default BuyBstModal;
