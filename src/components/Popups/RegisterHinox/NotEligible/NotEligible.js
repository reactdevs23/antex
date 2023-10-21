import React from "react";
import { MdOutlineClose } from "react-icons/md";

import { notAllowed } from "../../../../images";
import styles from "./NotEligible.module.css";

const NotEligible = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={notAllowed} alt="#" className={styles.notAllowed} />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            You are not eligible to register because you are not a contributor
            or staking on Hinox,you can wait for the community rounds to be able
            to participate in the sales{" "}
            <a href="#/" className={styles.learnMore}>
              learn more.
            </a>
          </p>
          <p className={[styles.text, styles.green].join(" ")}>
            If you are staking or a contributor on Hinox, please connect the
            same wallet you used to perform the operation.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={[styles.button, styles.goToStakingButton].join(" ")}
          >
            Go to Staking
          </button>{" "}
          <button
            className={[styles.button, styles.contributeButton].join(" ")}
          >
            Contribute
          </button>
        </div>
      </div>
    </>
  );
};

export default NotEligible;
