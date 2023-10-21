import React, { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import styles from "./DropDown.module.css";

const Dropdown = ({ dropdownItems, active, setActive }) => {
  const [dropdown, setDropDown] = useState(false);
  const handleDropDown = () => {
    if (dropdown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  return (
    <div className={styles.dropdown}>
      <p className={styles.tab} onClick={handleDropDown}>
        {dropdownItems[active]}
        {dropdown ? (
          <BiChevronUp className={styles.arrow} />
        ) : (
          <BiChevronDown className={styles.arrow} />
        )}
      </p>
      {dropdown && (
        <div className={styles.dropdownItems}>
          {dropdownItems.map((el, i) => (
            <p
              key={i}
              onClick={() => {
                setDropDown(false);
                setActive(i);
              }}
              className={styles.item}
            >
              {el}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
