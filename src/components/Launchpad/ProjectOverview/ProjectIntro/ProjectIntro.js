import React, { useState } from "react";
import classes from "./ProjectIntro.module.css";
import { person, projectIntroTitle, youtubeLogo } from "../../../../images";
import ReactPlayer from "react-player";
const ProjectIntro = () => {
  const [videoClicked, setVideoClicked] = useState(false);
  return (
    <div className={classes.wrapper}>
      <h3>PROJECT INTRO</h3>

      <div className={classes.box}>
        {!videoClicked ? (
          <div
            className={classes.boxMain}
            onClick={() => setVideoClicked(true)}
          >
            <img className={classes.yt} src={youtubeLogo} alt="" />
            <img
              className={classes.title}
              src={projectIntroTitle}
              alt="project-title"
            />

            <div className={classes.people}>
              <div className={classes.peopleItem}>
                <img src={person} alt="person" />
                <div>
                  <h6 className={classes.name}>Michael Michael</h6>
                  <p>hinox CMO</p>
                </div>
              </div>
              <div className={classes.peopleItem}>
                <img src={person} alt="person" />
                <div>
                  <h6 className={classes.name}>Michael Michael</h6>
                  <p>hinox CMO</p>
                </div>
              </div>
              <div className={classes.peopleItem}>
                <img src={person} alt="person" />
                <div>
                  <h6 className={classes.name}>Michael Michael</h6>
                  <p>hinox CMO</p>
                </div>
              </div>
              <div className={classes.peopleItemDescs}>
                <div>
                  <div className={classes.descItem}>
                    <p>Venue: </p>
                    <h6>Twitter</h6>
                  </div>
                  <div className={classes.descItem}>
                    <p>Reward:</p> <h6>200 USDT</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.videoWrapper}>
            <ReactPlayer
              className={classes.player}
              url="https://www.youtube.com/embed/tQUzJCmkJ_M?si=YniqhlI9j-LZjSIG&autoplay=1"
              width="100%"
              height="100%"
              controls
              playing
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectIntro;
