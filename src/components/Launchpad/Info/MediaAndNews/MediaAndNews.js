import React from "react";
import {
  binanceCoin,
  projectIntro,
  projectIntro2,
  partnerShipAnouncement,
} from "../../../../images";
import styles from "./MediaAndNews.module.css";

const MediaAndNews = () => {
  const data = [
    {
      banner: binanceCoin,
      title: "Binanca coin AMA #1 – Project Overview  - Hinox",
      text: "On 02/09/2023 at 6:00 p.m. (PST), an AMA session was held on Hinox Twitter",
      socialLink: "Twitter.com/hinox-io",
    },
    {
      banner: projectIntro,
      title: "Binanca coin AMA #2 – Project Overview  - Hinox",
      text: "On 02/09/2023 at 6:00 p.m. (PST), an AMA session was held on Hinox Twitter",
      socialLink: "Twitter.com/hinox-io",
    },
    {
      banner: partnerShipAnouncement,
      title: "Strategic Partnership Announcement",
      text: "On 02/09/2023, Biinace  Project Announced strategic partnership With Meta",
      socialLink: "Twitter.com/hinox-io",
    },
    {
      banner: projectIntro2,
      title: "Binanca coin AMA #2 – Project Overview  - Hinox",
      text: "On 02/09/2023 at 6:00 p.m. (PST), an AMA session was held on Hinox Twitter",
      socialLink: "Twitter.com/hinox-io",
    },
  ];
  return (
    <div className={styles.wrapper}>
      {data.map((el, i) => (
        <div className={styles.infoContainer} key={i}>
          <img src={el.banner} alt="#" className={styles.banner} />
          <div className={styles.info}>
            <h4 className={styles.title}>{el.title}</h4>
            <p className={styles.text}>{el.text}</p>

            <a
              href={el.to}
              target="_blank"
              rel="noreferrer"
              className={[styles.socialLink, styles.text].join(" ")}
            >
              {el.socialLink}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaAndNews;
