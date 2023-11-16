import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Faq.module.css";

const Faq = () => {
  const [showAnswer, setShowAnser] = useState(null);
  const faqArray = [
    {
      question: "Why do I need to Stake my BST token?",
      list: true,
      answer: [
        "You need to stake yor token in order to participate in sales.",
        "Staking your token qualifies you to vote on governance and incubation with a ratio of 1:1.",
        "You earn rewards by locking your tokens.",
        "You need to stake your token to qualify for a guaranteed allocation.",
        "Staking your token is one of the criteria you need to qualify for airdrops in our ecosystem.",
        "you need to stake your token in order to be qualify for private sales.",
      ],
    },
    {
      question: "Do I need to unstake and restake for each IDO?",
      answer:
        "No! You are eligible to participate in IDOs as long as your token remain staked.",
    },
    {
      question: "How is wallet allocation calculated?",
      answer:
        "Wallet allocation is determined by dividing the each wallets percentage stake in the pool by the total numbers  of registered participants in the tier and multiplied by the pool weight.",
    },
    {
      question: "What happens when my lock duration is over?",
      answer:
        "When your lock duration expires,You stopped earning rewards but can still register for sales unless you unstake your token.",
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
                {!items.list && (
                  <p className={`${styles.answer} ${styles.question}`}>
                    {items.answer}
                  </p>
                )}
                {items.list && (
                  <ul className={styles.list}>
                    {items.answer.map((answer, i) => (
                      <li
                        className={`${styles.answer} ${styles.question}, `}
                        key={i}
                      >
                        {answer}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
