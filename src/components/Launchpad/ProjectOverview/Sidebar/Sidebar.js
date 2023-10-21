import React from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./Sidebar.module.css";
import { Link } from "react-scroll";

const Sidebar = ({ sidebar, setSidebar }) => {
  const sidebarItems = [
    { item: "Overview", to: "overview" },
    { item: "Problem", to: "problem" },
    { item: "Solution", to: "solution" },
    { item: "Value preposition", to: "valuepreposition" },
    { item: "Allocation and Distribution", to: "allocationanddistribution" },
    { item: "Tokenomics", to: "tokenomics" },
    { item: "Summary", to: "summary" },
    { item: "Team", to: "team" },
  ];
  return (
    <div className={[styles.sidebar, sidebar && styles.showSidebar].join(" ")}>
      <h3 className={styles.heading}>
        TABLE OF CONTENT{" "}
        <IoMdClose
          className={styles.icon}
          onClick={() => setSidebar((prev) => !prev)}
        />
      </h3>
      {sidebarItems.map((el, i) => (
        <Link
          key={i}
          className={styles.item}
          activeClass={styles.activeItem}
          to={el.to}
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          activeStyle={{ color: "green" }}
          containerId="containerElement"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {i + 1}. {el.item}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
