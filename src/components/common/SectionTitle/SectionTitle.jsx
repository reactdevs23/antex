import clsx from "clsx";
import classes from "./SectionTitle.module.css";

const SectionTitle = ({ center, children, tag, noSpace }) => {
  return (
    <h2
      className={clsx(
        classes.sectionTitle,
        center && classes.center,
        noSpace && classes.noSpace
      )}
    >
      <span>{children}</span>
      {tag && <div className={classes.tag}>{tag}</div>}
    </h2>
  );
};

export default SectionTitle;
