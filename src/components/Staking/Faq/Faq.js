import React, { useState } from "react";

import styles from "./Faq.module.css";
import SingleFaq from "./SingleFaq";

const Faq = () => {
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
          <SingleFaq {...items} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
