import React, { useState } from "react";

import { magnifier } from "../../../images";
import SingleProject from "./SingleProject/SingleProject";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [];
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <div className={styles.searchContainer}>
        <img src={magnifier} alt="magnifier" />
        <input
          type="text"
          placeholder="Search projects"
          value={searchValue}
          onChange={(e) => setSearchValue(() => e.target.value)}
        />
      </div>
      <div className={styles.projects}>
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
      </div>
    </div>
  );
};

export default Projects;
