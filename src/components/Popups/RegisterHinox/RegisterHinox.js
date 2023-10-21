import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import styles from "./RegisterHinox.module.css";
import ContributorAndStaking from "./ContributorAndStaking/ContrubutorAndStaking";
import EnterAptosWallet from "./EnterAptosWallet/EnterAptosWallet";
import WaitingForConfirmation from "./WaitingForConfirmation/WaitingForConfirmation";
import RegistrationCompletedModal from "./RegistrationCompletedModal/RegistrationCompletedModal";
import ReserveSpot from "../ReserveSpot/ReserveSpot";
import NotEligible from "./NotEligible/NotEligible";

const RegisterHinox = ({
  setModal,
  contributor,
  staker,
  setWaitingForConfirmatinModal,
}) => {
  const [enterAposModal, setEnterAposModal] = useState(false);

  return (
    <>
      <div className={[styles.wrapper, "overflow"].join(" ")}>
        <h2 className={styles.title}>
          Register for Hinox ecosystem coin Sales
        </h2>
        <div className={styles.closeContainer} onClick={() => setModal(false)}>
          <MdOutlineClose className={styles.close} />
        </div>
        {!staker && !contributor && <NotEligible />}
        {!enterAposModal && (staker || contributor) && (
          <ContributorAndStaking
            setEnterAposModal={setEnterAposModal}
            staker={staker}
            contributor={contributor}
          />
        )}

        {enterAposModal && (
          <EnterAptosWallet
            setModal={setModal}
            setWaitingForConfirmatinModal={setWaitingForConfirmatinModal}
          />
        )}
      </div>

      <div className={styles.overlay}></div>
    </>
  );
};

export default RegisterHinox;
