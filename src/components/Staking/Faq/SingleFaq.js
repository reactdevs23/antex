import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import styles from "./Faq.module.css";

const SingleFaq = ({ question, answer }) => {
  const [showAnswer, setShowAnser] = useState(false);
  return (
    <div
      className={showAnswer ? styles.activeFaqContainer : styles.faqContainer}
      onClick={() => setShowAnser((prev) => !prev)}
    >
      <div className={styles.questionWrapper}>
        <p className={styles.question}>{question}?</p>
        {showAnswer ? (
          <BsChevronUp className={styles.icon} />
        ) : (
          <BsChevronDown className={styles.icon} />
        )}
      </div>
      {showAnswer && (
        <p className={`${styles.answer} ${styles.question}`}>{answer}</p>
      )}
    </div>
  );
};

export default SingleFaq;
