import React from "react";
import styles from "./NoInfo.module.css";
import { notAllowed } from "../../../../images";
const NoInfo = () => {
  return (
    <div className={styles.wrapper}>
      <img src={notAllowed} alt="#" className={styles.notAllowed} />

      <h5 className={styles.title}>NO CONTENT To SHOW</h5>
      <p className={styles.text}>
        Currently there are no content to show for this section
      </p>
    </div>
  );
};

export default NoInfo;
