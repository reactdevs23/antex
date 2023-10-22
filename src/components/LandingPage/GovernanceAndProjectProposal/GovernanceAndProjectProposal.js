import React, { useState } from "react";
import styles from "./GovernanceAndProjectProposal.module.css";
import { videoPlaceholder } from "../../../images";
import ReactPlayer from "react-player";

const GovernanceAndProjectProposal = () => {
  const [videoClicked, setVideoClicked] = useState(false);
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <h4 className={styles.title}> Governance and project Proposal votes</h4>
      <p className={styles.tagline}>
        Hinox as a decentralized Autonomous organisation
      </p>

      <div className={styles.container}>
        {" "}
        <div>
          <p className={styles.info}>
            {" "}
            Become a Part of the Conversation, Influence the Path Ahead in the
            DAO Maker Ecosystem Through Staker Governance. And as a DAO
            Contributor, You Hold the Power to Cast Your Vote on Project
            Proposals, Shaping the Evolution of Our Collective Journey.
          </p>
          <div className={styles.buttonContainer}>
            <button className={[styles.button, styles.joinButton].join(" ")}>
              Join our DAO
            </button>{" "}
            <button className={[styles.button, styles.voteButton].join(" ")}>
              Vote Projects
            </button>
          </div>
        </div>
        <div className={styles.contribute}>
          <h5 className={styles.heading}>How to Contribute to DAO Treasury</h5>
          {!videoClicked && (
            <img
              src={videoPlaceholder}
              alt=""
              onClick={() => setVideoClicked(true)}
            />
          )}
          {videoClicked && (
            <div className={styles.videoWrapper}>
              <ReactPlayer
                className={styles.player}
                url="https://www.youtube.com/embed/tQUzJCmkJ_M?si=YniqhlI9j-LZjSIG&autoplay=1"
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>

            /* <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/tQUzJCmkJ_M?si=YniqhlI9j-LZjSIG&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */
          )}
        </div>
      </div>
    </div>
  );
};

export default GovernanceAndProjectProposal;
