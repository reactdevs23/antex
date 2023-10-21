import { useState } from "react";
import { Link } from "react-router-dom";

import {
  hamburger,
  logo,
  modalCross,
  sun,
  user,
  howToBuyBst,
  launchpad,
  buyBstToken,
  blogsAndEditorial,
  vestingClaim,
  docsAndGuide,
  inoLanuchpad,
  allocationAndEligibility,
  stakingHome,
  stakingDashBoard,
  activitiesHistory,
  voteOnGovernance,
  voteForProjects,
  contributToDao,
  airdrop,
  stakingLeaderBoard,
} from "../../images";
import clsx from "clsx";
import classes from "./Navbar.module.css";
import HoverComponent from "./HoverComponent/HoverComponent";

const links = [
  {
    label: "Launchpad",

    info: [
      {
        icon: launchpad,
        title: "Launchpad",
        to: "/",
        description: "All IDO sales, from active,upcoming and past sales.",
      },
      {
        icon: buyBstToken,
        title: "Buy BST Token",
        button: true,
        description:
          "Get our utility token and unlock all the potential in our ecosystem.",
      },
      {
        icon: blogsAndEditorial,
        title: "Blogs and editorial",
        link: true,
        to: "#",
        description:
          "Explore our articles for expert insights and actionable tips that  helps you stay beyond the curves.",
      },
      {
        icon: vestingClaim,
        title: "vesting claim",
        to: "/vestingdashoboard",
        description:
          "Connect your wallet to see the your available claims from the sales your participated.",
      },
      {
        icon: docsAndGuide,
        title: "Docs & guilds",
        link: true,
        to: "#",
        description:
          "Explore our docs and deep dive into our helpful tips to help in easy and seamless navigation on Hinox",
      },
    ],
    details: {
      img: howToBuyBst,
      title: "How to buy $BST and Participate in sales",
      tagline: "Learn how to buy $BST and join best sales",
    },
  },
  {
    label: "INO Launchpad",

    info: [
      {
        icon: inoLanuchpad,
        title: "INO Launchpad",
        to: "/ino-launchpad",
        description: "All NFT sales, from active,upcoming and past sales.",
      },
      {
        icon: buyBstToken,
        title: "Buy BST Token",
        button: true,
        description:
          "Get our utility token and unlock all the potential in our ecosystem.",
      },
      {
        icon: blogsAndEditorial,
        title: "Blogs and editorial",
        link: true,
        to: "#",
        description:
          "Explore our articles for expert insights and actionable tips that  helps you stay beyond the curves.",
      },
      {
        icon: allocationAndEligibility,
        title: "Allocation and eligibility",
        to: "/",
        description:
          "Explore our articles and enrich your knowledge on how we make sales available to everyone.",
      },
      {
        icon: docsAndGuide,
        title: "Docs & guilds",
        link: true,
        to: "#",
        description:
          "Explore our docs and deep dive into our helpful tips to help in easy and seamless navigation on Hinox",
      },
    ],

    details: {
      img: howToBuyBst,
      title: "How to buy $BST and Participate in sales",
      tagline: "Learn how to buy $BST and join best sales",
    },
  },
  {
    label: "Staking",
    to: "/staking",
    info: [
      {
        icon: stakingHome,
        title: "Staking Home",
        to: "/staking",
        description: "All NFT sales, from active,upcoming and past sales.",
      },
      {
        icon: stakingDashBoard,
        title: "Staking Dashboard",
        to: "/staking-dashboard",
        description: "Go to your dashboard to make your stakes.",
      },
      {
        icon: blogsAndEditorial,
        title: "Blogs and editorial",
        description:
          "Explore our articles for expert insights and actionable tips that  helps you stay beyond the curves.",
      },
      {
        icon: stakingLeaderBoard,
        title: "Staking Leaderboard",
        to: "/leaderboard",
        description:
          "Connect your wallet to see your position in the Hinox staking.",
      },
      {
        icon: activitiesHistory,
        title: "Activities History",
        to: "/activitieshistory",
        description:
          "See all your Activity history on staking and related activities",
      },
      {
        icon: docsAndGuide,
        title: "Docs & guilds",
        link: true,
        to: "#",
        description:
          "Explore our docs and deep dive into our helpful tips to help in easy and seamless navigation on Hinox",
      },
    ],

    details: {
      img: howToBuyBst,
      title: "How to buy $BST and Participate in sales",
      tagline: "Learn how to buy $BST and join best sales",
    },
  },
  {
    label: "DAO",

    info: [
      {
        icon: voteOnGovernance,
        title: "Vote on Governance(Tally)",
        to: "/",
        description:
          "Take part in the ecosystem through creating and voting on proposals in our Tally ",
      },
      {
        icon: voteForProjects,
        title: "Vote for Projects & incubation",
        to: "/",
        description:
          "As a DAO executive/Contributor, you have rights to vote on project incubation and selection process.",
      },
      {
        icon: blogsAndEditorial,
        title: "Blogs and editorial",
        link: true,
        to: "#",
        description:
          "Explore our articles for expert insights and actionable tips that  helps you stay beyond the curves.",
      },
      {
        icon: contributToDao,
        title: "Contribute to DAO",
        to: "/",
        description:
          "Contributing the HiDOA gives you all exclusive rights and privileges.",
      },
      {
        icon: docsAndGuide,
        title: "Docs & guilds",
        to: "/",
        description:
          "Explore our docs and deep dive into our helpful tips to help in easy and seamless navigation on Hinox",
      },
    ],

    details: {
      img: howToBuyBst,
      title: "How to buy $BST and Participate in sales",
      tagline: "Learn how to buy $BST and join best sales",
    },
  },
  {
    label: "Claims",

    info: [
      {
        icon: airdrop,
        title: "Airdrop",
        to: "/airdrop",
        description: "All IDO sales, from active,upcoming and past sales.",
      },
      {
        icon: buyBstToken,
        title: "Buy BST Token",
        button: true,
        description:
          "Get our utility token and unlock all the potential in our ecosystem.",
      },
      {
        icon: blogsAndEditorial,
        title: "Blogs and editorial",
        link: true,
        to: "#",
        description:
          "Explore our articles for expert insights and actionable tips that  helps you stay beyond the curves.",
      },
      {
        icon: allocationAndEligibility,
        title: "Allocation and eligibility",
        to: "/",
        description:
          "Explore our articles and enrich your knowledge on how we make sales available to everyone.",
      },
      {
        icon: docsAndGuide,
        title: "Docs & guilds",
        link: true,
        to: "#",
        description:
          "Explore our docs and deep dive into our helpful tips to help in easy and seamless navigation on Hinox",
      },
    ],

    details: {
      img: howToBuyBst,
      title: "How to buy $BST and Participate in sales",
      tagline: "Learn how to buy $BST and join best sales",
    },
  },
  {
    label: "Others",
    to: "/",
  },
];

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [activeHoverComponent, setShowAcitiveHoverComponent] = useState(null);
  const [showHoverComponent, setShowHoverComponent] = useState(false);

  return (
    <div
      className={classes.navbar}
      onMouseLeave={() =>
        window.innerWidth > 991 && setShowHoverComponent(false)
      }
    >
      <div className={["mainWrapper", classes.wrapper].join(" ")}>
        <div className={classes.navbarMain}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <img
            className={classes.menu}
            src={hamburger}
            alt="hamburger"
            onClick={() => setIsMenuActive(true)}
          />
          <div
            className={clsx(classes.sidebar, isMenuActive && classes.active)}
          >
            <img
              className={classes.cross}
              src={modalCross}
              alt="cross"
              onClick={() => {
                setIsMenuActive(false);
                setShowHoverComponent(false);
              }}
            />
            <div className={classes.links}>
              {links.map((el, idx) => {
                return (
                  <p
                    key={idx}
                    className={classes.link}
                    // to="/"
                    onMouseEnter={() => {
                      window.innerWidth > 991 &&
                        setShowAcitiveHoverComponent(idx);
                      window.innerWidth > 991 && setShowHoverComponent(true);
                    }}
                    onClick={() => {
                      window.innerWidth < 991 &&
                        setShowAcitiveHoverComponent(idx);
                      window.innerWidth < 991 && setShowHoverComponent(true);
                    }}
                  >
                    {el.label}
                  </p>
                );
              })}
            </div>
            <div className={classes.buttonContainer}>
              <button className={classes.btn}>
                <img src={user} alt="user" />
              </button>
              <button className={classes.btn}>
                <img src={sun} alt="sun" />
              </button>
              <button className={classes.connect}>Connect Wallet</button>
            </div>{" "}
            {showHoverComponent && links[activeHoverComponent].info && (
              <HoverComponent
                setIsMenuActive={setIsMenuActive}
                setShowHoverComponent={setShowHoverComponent}
                info={links[activeHoverComponent].info}
                details={links[activeHoverComponent].details}
              />
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
