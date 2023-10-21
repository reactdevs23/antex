import React, { useEffect, useState } from "react";

import styles from "./Progressbar.module.css";

const ProgressBar = ({
  progress,
  background,
  overlay,
  allocation,
  salesOver,
}) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = progressValue + "%";

  const progressStyle = {
    width: progressPercentage,
    background: background,
  };
  useEffect(() => {
    setProgressValue(progress);
  }, [progress]);
  return (
    <>
      <div
        className={[
          styles.progressBar,
          allocation && styles.progressBar2,
          salesOver && styles.salesOver,
        ].join(" ")}
      >
        <div className={[styles.progress].join(" ")} style={progressStyle}>
          {salesOver && (
            <span className={styles.tooltip}>Sales {`${progress}%`}</span>
          )}
          {overlay && <span className={styles.tooltip}>{`${progress}%`}</span>}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
