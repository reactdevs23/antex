import React from "react";
import { partnerAndInvestors } from "../../../../images";
import styles from "./PartnerAndInvestors.module.css";

const PartnerAndInvestors = () => {
  return (
    <div>
      <img src={partnerAndInvestors} alt="#" className={styles.image} />
    </div>
  );
};

export default PartnerAndInvestors;
