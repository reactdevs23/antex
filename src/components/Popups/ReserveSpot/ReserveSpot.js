import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Enabled from "../../common/Enabled/Enabled";
import TrueFalse from "../../common/TrueFalse/TrueFalse";

import classes from "./ReserveSpot.module.css";
import { coinInsert, info } from "../../../images";
import ProgressBar from "../../common/Progressbar/Progressbar";
import { handleKeyDown } from "../../utils";

const ReserveSpot = ({ setReserveSpot, setShowReserveSpotModal }) => {
  const [amount, setAmount] = useState("");

  const handleConfirmReservation = () => {
    setShowReserveSpotModal(false);
    setReserveSpot(true);
  };
  return (
    <>
      <div className={classes.overlay} />
      <div className={[classes.reserveSpot, "overflow"].join(" ")}>
        <div className={classes.main}>
          {" "}
          <div
            className={classes.closeContainer}
            onClick={() => setShowReserveSpotModal(false)}
          >
            <MdOutlineClose className={classes.close} />
          </div>
          <h4 className={classes.title}>Reserve your Spot (Optional)</h4>
          <div className={classes.enabledBoxes}>
            <TrueFalse />
          </div>
          <div className={classes.enabledBoxes}>
            <Enabled reserveSpot />
          </div>
          <div className={classes.reserveSpotDescription}>
            <p>
              <span className={classes.green}> Reserve spot </span> is an
              automated buy option that will allow a user's allocation to be
              automatically purchased during the IDO sales window.
            </p>
          </div>
          <div className={classes.reserveSpotDescription}>
            <img src={info} alt="info" />
            <p>
              <span className={classes.green}>
                We recommend that you reserve amount you want to buy plus $2 for
                network fee. Excessive deposits will be refunded automatically.
              </span>
            </p>
          </div>
          <div className={classes.box}>
            <ProgressBar allocation progress={50} />
            <div className={classes.amounts}>
              <div>6000 USD</div>
              <div>10,000 USD</div>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.head}>
              <div className={classes.amount}>Amount:</div>
              <div className={classes.max}>Max</div>
            </div>
            <div className={classes.numbers}>
              <img src={coinInsert} alt="" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onKeyDown={handleKeyDown}
                className={classes.num}
                placeholder="Amount"
              />
              {/* <div className={classes.num}>10.00</div> */}
              <div className={classes.unit}>USDT</div>
            </div>
            <div className={classes.additionalInfo}>
              <div>
                You will get:
                <span className={classes.green}> 214,474 UBS</span>
              </div>
              <div>
                Estimated gas fee:
                <span className={classes.green}> +2 USDT</span>
              </div>
            </div>
          </div>
        </div>

        <button className={classes.confirm} onClick={handleConfirmReservation}>
          Confirm Reservation
        </button>
      </div>
    </>
  );
};

export default ReserveSpot;
