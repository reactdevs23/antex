import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Faq.module.css";

const Faq = () => {
  const [showAnswer, setShowAnser] = useState(null);
  const faqArray = [
    {
      question: "Why do I need to Stake my BST token?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      question: "Do I need to unstake and restake for each IDO?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      question: "How is wallet allocation calculated?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      question: "What happens when my lock duration is over?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      question: "When is my locked token released?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      question: "Can I open more than one lock in a pool?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      question: "Can I stake in more than 1 pool?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      question:
        "How do I claim the available reward in my staking  dashboard ?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
    {
      question:
        "How do I unstake my  $BST tokens in the HiDAO executive pool ?",
      answer:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
    },
  ];
  return (
    <section className={[styles.Wrapper, "mainWrapper"].join(" ")}>
      {" "}
      <h3 className={styles.title}> FAQs</h3>
      <div className={styles.faqWrapper}>
        {faqArray.map((items, index) => (
          <div
            key={index}
            className={styles.faqContainer}
            onClick={() => setShowAnser(index)}
          >
            <div className={styles.questionWrapper}>
              <p className={styles.question}>{items.question}</p>
              {showAnswer === index ? (
                <FaChevronUp className={styles.icon} />
              ) : (
                <FaChevronDown className={styles.icon} />
              )}
            </div>
            {showAnswer === index && (
              <div className={styles.answerContainer}>
                <p className={`${styles.answer} ${styles.question}`}>
                  {items.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
