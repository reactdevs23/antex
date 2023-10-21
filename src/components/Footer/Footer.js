import React from "react";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsDiscord } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { footerLogo } from "../../images";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Footer = () => {
  const socialItems = [
    { icon: <FiInstagram className={styles.socialIcon} />, to: "#" },
    { icon: <BsFacebook className={styles.socialIcon} />, to: "#" },
    { icon: <BsTwitter className={styles.socialIcon} />, to: "#" },
    { icon: <FaLinkedinIn className={styles.socialIcon} />, to: "#" },
    { icon: <BsDiscord className={styles.socialIcon} />, to: "#" },
  ];

  const footerItems = [
    {
      heading: "Company",
      items: [
        { item: "About", to: "/about" },
        { item: "Careers", to: "/careers" },
        { item: "Affiliates", to: "/affiliates" },
        { item: "Press", to: "/press" },
        { item: "Investors", to: "/investors" },
        { item: "Legal & Privacy", to: "/legal&privacy" },
      ],
    },
    {
      heading: "Features",
      items: [
        { item: "Buy & Sell Crypto", to: "/buy&sellCrypto" },
        { item: "Wallet", to: "/wallet" },
        { item: "Card", to: "/card" },
        { item: "Dashboard", to: "/dashboard" },
        { item: "trading", to: "/trading" },
        { item: "Portfolio", to: "/portfolio" },
      ],
    },
    {
      heading: "Developers",
      items: [
        { item: "Cloud", to: "/cloud" },
        { item: "Wallet SDK", to: "/walletSDK" },
        { item: "Query & Transact", to: "/query&transact" },
        { item: "Commerce", to: "/commerce" },
        { item: "Exchange & Pro", to: "/exchange&pro" },
        { item: "API Access", to: "/apiAccess" },
      ],
    },
    {
      heading: "Resources",
      items: [
        { item: "Blog", to: "/blog" },
        { item: "Help & Support", to: "/help&support" },
        { item: "Customer Stories", to: "/customerStories" },
        { item: "FAQ", to: "/faq" },
      ],
    },
  ];
  return (
    <div className={styles.footer}>
      <footer className={[styles.wrapper, "mainWrapper"].join(" ")}>
        <div className={styles.logoAndInfo}>
          <div className={styles.logoContainer}>
            <img src={footerLogo} alt="#" className={styles.logo} />
            <div className={styles.logoTextContainer}>
              <p className={styles.name}>HINOX</p>
              <p className={styles.tagline}>ECOSYSTEM</p>
            </div>
          </div>
          <p className={styles.info}>
            Hinox delivers fundraising solutions and agile services for seamless
            onboarding of both new and existing projects; helping them to defy
            gravity.
          </p>
          <div className={styles.socialContainer}>
            {socialItems.map((social, i) => (
              <a href={social.to} target="_blank" rel="noreferrer" key={i}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {footerItems.map((el, i) => (
          <div className={styles.itemContainer} key={i}>
            <h4 className={styles.heading}>{el.heading}</h4>

            {el.items.map((items, index) => (
              <Link to={items.to} key={index} className={styles.item}>
                {items.item}
              </Link>
            ))}
          </div>
        ))}{" "}
        <ScrollToTop />
      </footer>
      <p className={[styles.copyRight, "mainWrapper"].join(" ")}>
        Copyright 2023 © ArtPanda
      </p>
    </div>
  );
};

export default Footer;
