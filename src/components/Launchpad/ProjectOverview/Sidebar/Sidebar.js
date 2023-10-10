import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-scroll";

const Sidebar = () => {
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
    <div className={styles.sidebar}>
      <h3 className={styles.heading}>TABLE OF CONTENT</h3>
      {sidebarItems.map((el, i) => (
        <Link
          key={i}
          className={styles.item}
          activeClass={styles.activeItem}
          to={el.to}
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          activeStyle={{ color: "green" }}
        >
          {i + 1}. {el.item}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
