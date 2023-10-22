import React from "react";
import styles from "./DeeperIntoOurEcosystem.module.css";
import SubsCribe from "../../common/Subscriber/SubsCribe/SubsCribe";

const DeeperIntoOurEcosystem = () => {
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <h5 className={styles.title}>
        Do you want to dive deeper into our Ecosystem, Tutorials and News?
        Explore our articles for expert insights and actionable tips that helps
        you stay beyond the curves.
      </h5>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <p className={styles.info}>
            Visit our blogs or subscribe to Newsletter for latest news and sales
            notification.
          </p>{" "}
          <div className={styles.buttonContainer}>
            <a
              href="https://blog.hinox.io/"
              target="_blank"
              rel="noreferrer"
              className={[styles.button, styles.readBlogs].join(" ")}
            >
              Read Blogs
            </a>
            <button className={[styles.button, styles.docs].join(" ")}>
              Docs
            </button>
          </div>
        </div>

        <SubsCribe />
      </div>
    </div>
  );
};

export default DeeperIntoOurEcosystem;
