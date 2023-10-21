import React, { useEffect, useState } from "react";
import styles from "./CountDown.module.css";

const MyCountDown = ({ dayCount, hourAndMinute, hourMinSec }) => {
  const endTime = new Date(dayCount).getTime();

  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const day = Math.floor(gap / days);
  const hour = Math.floor((gap % days) / hours);
  const minute = Math.floor((gap % hours) / minutes);
  const second = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
  }, [currentTime]);

  return (
    <>
      {!hourAndMinute && !hourMinSec && (
        <>
          <span>{`${0 < day && day < 10 ? "0" + day : day}`}</span>{" "}
          <span>:</span>
          <span>{`${0 < hour && hour < 10 ? "0" + hour : hour}`}</span>
          <span>:</span>
          <span>{`${0 < minute && minute < 10 ? "0" + minute : minute}`}</span>
          <span>:</span>
          <span>{`${0 < second && second < 10 ? "0" + second : second}`}</span>
        </>
      )}
      {!hourMinSec && hourAndMinute && (
        <>
          <span>{`${0 < hour && hour < 10 ? "0" + hour : hour}`}h</span>
          <span> :</span>{" "}
          <span>
            {`${0 < minute && minute < 10 ? "0" + minute : minute}`}mins
          </span>
        </>
      )}
      {hourMinSec && (
        <>
          <span>{`${0 < hour && hour < 10 ? "0" + hour : hour}`}h</span>
          <span> :</span>{" "}
          <span>{`${0 < minute && minute < 10 ? "0" + minute : minute}`}m</span>{" "}
          <span> :</span>{" "}
          <span>{`${0 < second && second < 10 ? "0" + second : second}`}s</span>
        </>
      )}
    </>
  );
};

export default MyCountDown;
