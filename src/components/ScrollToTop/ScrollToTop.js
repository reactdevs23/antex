import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.wrapper} onClick={scrollToTop}>
      <BiUpArrowAlt className={styles.arrow} />
    </div>
  );
};

export default ScrollToTop;
