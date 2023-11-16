import React, { useState, useMemo } from "react";
import MenuContainer from "../../../components/common/MenuContainer/MenuContainer";
// import LoadMore from "../../../components/common/LoadMore/LoadMore";
import Pagination from "../../../components/common/Pagination/Pagination";
import {
  arrowDropdown2,
  binanceNetwork,
  magnifier,
  person,
} from "../../../images";
import SingleProject from "./SingleProject/SingleProject";
import styles from "./Projects.module.css";
const data = [
  {
    user: person,
    title: "AHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "BHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },

      { name: "Vesting2", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "AHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "BHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },

      { name: "Vesting2", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "AHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "BHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },

      { name: "Vesting2", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "AHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "BHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },

      { name: "Vesting2", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "AHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "BHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },

      { name: "Vesting2", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "AHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "BHinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: true },
      { name: "Vesting3", active: false },
      { name: "Vesting4", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },

      { name: "Vesting2", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
  {
    user: person,
    title: "Hinox Point/ANT-P tesnet Airdrop",
    totalClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    token: "BST",
    totalUnClaimedbst: { amount: "100,000,00 ", usdAmount: "$17056.5" },
    bst: "$0.235",

    description:
      "All Hinox users who participated in testnet and claimed ANT-point are eligabile for this airdrop to redeem their ANT point for 1000:1 and also those who qualifies for free token from crew 3 and others campaign during and after the beta testing.",

    claimOn: { networkIcon: binanceNetwork, networkName: "Binance Network" },
    myUnclaimedBst: {
      amount: "50000",
      usdAmount: "$1000",
    },
    unlockNext: new Date(),
    vestingCounts: "02 of 06 Months",
    vestings: [
      { name: "Vesting1", active: true },
      { name: "Vesting2", active: false },
      { name: "Vesting4", active: false },
      { name: "Vesting5", active: false },
      { name: "Vesting6", active: false },
      { name: "Vesting7", active: false },
      { name: "Vesting8", active: false },
      { name: "Vesting9", active: false },
      { name: "Vesting10", active: false },
      { name: "Vesting11", active: false },
      { name: "Vesting12", active: false },
    ],
    availableToken: {
      bnbAmount: "5806",
      usdAmount: "5,000",
    },
  },
];
const Projects = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const filteredAndPaginatedData = useMemo(() => {
    const filteredData = data.filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    const paginatedData = filteredData.slice(firstPageIndex, lastPageIndex);

    return paginatedData;
  }, [currentPage, itemsPerPage, data, searchValue]);
  return (
    <div className={[styles.wrapper, "mainWrapper"].join(" ")}>
      <div className={styles.searchContainer}>
        <img src={magnifier} alt="magnifier" />
        <input
          type="text"
          placeholder="Search projects"
          value={searchValue}
          onChange={(e) => setSearchValue(() => e.target.value)}
        />
      </div>
      <div className={styles.projects}>
        {filteredAndPaginatedData.map((el, i) => (
          <SingleProject {...el} key={i} />
        ))}
      </div>
      <div className={styles.actions}>
        <div className={styles.loadMoreAndDropDown}>
          <div className={styles.rowsContainer}>
            {" "}
            <div>Row Per Page</div>
            <MenuContainer
              onSelect={(val) => setItemsPerPage(val.label)}
              options={[{ label: 4 }, { label: 8 }, { label: 11 }]}
              defaultSelected={itemsPerPage}
            >
              <div className={styles.rowSelector}>
                {itemsPerPage} <div className={styles.line}></div>{" "}
                <img src={arrowDropdown2} alt="arrow" />
              </div>
            </MenuContainer>
          </div>
          {/* <LoadMore /> */}
          <Pagination
            // className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            siblingCount={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
