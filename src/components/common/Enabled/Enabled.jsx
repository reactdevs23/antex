import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { reserveLine, tickGreen } from "../../../images";
import classes from "./Enabled.module.css";

const Enabled = ({ reserveSpot }) => {
  const [enabled, setEanbled] = useState(true);
  const [executed, setExecuted] = useState(false);
  return (
    <div
      className={[
        classes.reserveBoxes,
        reserveSpot && classes.reserveSpot,
      ].join(" ")}
    >
      <div
        className={[classes.reserveBox, enabled && classes.enabled].join(" ")}
        onClick={() => setEanbled((prev) => !prev)}
      >
        {/* <img src={tickGreen} alt="tick-green" /> */}
        <FaRegCheckCircle className={classes.checkMark} />
        <p>Enabled</p>
      </div>
      <img src={reserveLine} alt="line" />
      <div
        className={[classes.reserveBox, executed && classes.executed].join(" ")}
        onClick={() => setExecuted((prev) => !prev)}
      >
        {/* <img src={tickGreen} alt="tick-green" /> */}
        <FaRegCheckCircle className={classes.checkMark} />
        <p>Executed</p>
      </div>
    </div>
  );
};

export default Enabled;
