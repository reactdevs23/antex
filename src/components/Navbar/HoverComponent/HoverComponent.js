import React from "react";
import { modalCross } from "../../../images";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Context";
import styles from "./HoverComponent.module.css";

const HoverComponent = ({
  info,
  details,
  setShowHoverComponent,
  setIsMenuActive,
}) => {
  const { setShowBuyBstModal } = useDataContext();
  return (
    <div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className={styles.wrapper}
      onMouseEnter={() => {
        window.innerWidth > 991 && setShowHoverComponent(true);
      }}
      onMouseLeave={() =>
        window.innerWidth > 991 && setShowHoverComponent(false)
      }
    >
      {" "}
      <img
        className={styles.cross}
        src={modalCross}
        alt="cross"
        onClick={() => {
          window.innerWidth < 991 && setShowHoverComponent(false);
        }}
      />
      <div className={styles.left}>
        {info.map((el, i) => (
          <div
            key={i}
            onClick={() => {
              setIsMenuActive(false);
              setShowHoverComponent(false);
            }}
          >
            <div className={styles.iconAndText}>
              <img src={el.icon} alt="#" className={styles.icon} />
              <div className={styles.titleAndDescription}>
                {el.link && (
                  <a
                    href={el.to}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.title}
                  >
                    {el.title}
                  </a>
                )}
                {!el.link && !el.button && (
                  <Link to={el.to} className={styles.title}>
                    {el.title}
                  </Link>
                )}
                {el.button && (
                  <p
                    className={styles.title}
                    onClick={() => setShowBuyBstModal(true)}
                  >
                    {el.title}
                  </p>
                )}

                <p className={styles.description}>{el.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <img src={details.img} alt="#" className={styles.image} />
        <h4 className={styles.heading}>{details.title}</h4>
        <p className={styles.description}>{details.tagline}</p>
      </div>
    </div>
  );
};

export default HoverComponent;
