import React from "react";
import styles from "./LaunchPad.module.css";
import Info from "../../components/Launchpad/Info/Info";
import Register from "../../components/Register/Register";

const LaunchPad = () => {
  return (
    <div>
      <Info />
      <Register />
    </div>
  );
};

export default LaunchPad;
