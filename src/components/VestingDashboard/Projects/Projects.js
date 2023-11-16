import { useEffect, useState, useMemo } from "react";
import MenuContainer from "../../../components/common/MenuContainer/MenuContainer";
// import LoadMore from "../../../components/common/LoadMore/LoadMore";
import Pagination from "../../../components/common/Pagination/Pagination";
import classes from "./Projects.module.css";
import {
  Abitrum,
  Avalanch,
  Optimism,
  Polygon,
  arrowDropdown2,
  binance,
  cryptoProject,
  ethereum,
  magnifier,
} from "../../../images";
import clsx from "clsx";
import Dropdown from "../../../components/common/Dropdown/Dropdown";

import SingleProject from "./SingleProject/SingleProject";

const rawProjects = [
  {
    img: cryptoProject,
    name: "CRYPTO PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: Abitrum,
    networkName: "Arbitrum",
    avialableTokenUsdPrice: "$12,000",
    claimable: true,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "SECOND PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: ethereum,
    networkName: "Ethereum",
    avialableTokenUsdPrice: "$12,000",
    claimable: false,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "THIRD PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: binance,
    networkName: "Binance",
    avialableTokenUsdPrice: "$12,000",
    lockedokenUsdPirce: "$12,000",
    claimable: false,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "FOURTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: Avalanch,
    networkName: "Avalanch",
    avialableTokenUsdPrice: "$12,000",
    lockedokenUsdPirce: "$12,000",
    claimable: false,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "FIFTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: Polygon,
    networkName: "Polygon",
    avialableTokenUsdPrice: "$12,000",
    lockedokenUsdPirce: "$12,000",
    claimable: false,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "SIXTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: Optimism,
    networkName: "Optimism",
    avialableTokenUsdPrice: "$12,000",
    lockedokenUsdPirce: "$12,000",
    claimable: true,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "CRYPTO PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: Abitrum,
    networkName: "Arbitrum",
    avialableTokenUsdPrice: "$12,000",
    claimable: true,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "SECOND PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: ethereum,
    networkName: "Ethereum",
    avialableTokenUsdPrice: "$12,000",
    claimable: false,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "THIRD PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: binance,
    networkName: "Binance",
    avialableTokenUsdPrice: "$12,000",
    lockedokenUsdPirce: "$12,000",
    claimable: false,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "FOURTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: Avalanch,
    networkName: "Avalanch",
    avialableTokenUsdPrice: "$12,000",
    lockedokenUsdPirce: "$12,000",
    claimable: false,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "FIFTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: Polygon,
    networkName: "Polygon",
    avialableTokenUsdPrice: "$12,000",
    lockedokenUsdPirce: "$12,000",
    claimable: false,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
  {
    img: cryptoProject,
    name: "SIXTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    networkIcon: Optimism,
    networkName: "Optimism",
    avialableTokenUsdPrice: "$12,000",
    lockedokenUsdPirce: "$12,000",
    claimable: true,
    vestingCounts: "02 of 06 Months",
    claimInfo: [
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: true,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
      {
        tokenUnlock: "20%",
        amountUnlock: {
          bnb: "4590 BNB ",
          usd: "10,000",
        },
        unlockAt: "20 Jan,2023,11:12am",

        claimed: false,
      },
    ],
  },
];

const allNetworks = [
  { networkIcon: Abitrum, networkName: "Arbitrum" },
  { networkIcon: ethereum, networkName: "Ethereum" },
  { networkIcon: binance, networkName: "Binance" },
  { networkIcon: Avalanch, networkName: "Avalanch" },
  { networkIcon: Polygon, networkName: "Polygon" },
  { networkIcon: Optimism, networkName: "Optimism" },
];

// 10 minutes timer

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Vesting");
  const [searchValue, setSearchValue] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");

  // Filter function to apply all filters
  const filterProjects = (project) => {
    const filterByName = project.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const filterByNetwork =
      !selectedNetwork ||
      project.networkName.toLowerCase() === selectedNetwork.toLowerCase();
    const filterByClaimable =
      selectedFilter === "Claimable Vesting" ? project.claimable : true;

    return filterByName && filterByNetwork && filterByClaimable;
  };

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return rawProjects
      .filter(filterProjects)
      .slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, searchValue, selectedFilter, selectedNetwork]);

  return (
    <div className={[classes.wrapper, "mainWrapper"].join(" ")}>
      <div className={classes.filteration}>
        <div className={classes.left}>
          <div className={classes.sortContainer}>
            <MenuContainer
              onSelect={(val) => setSelectedFilter(val.label)}
              options={[
                { label: "All Vesting" },
                { label: "Claimable Vesting" },
              ]}
              defaultSelected={selectedFilter}
            >
              <Dropdown label="Sort by:" defaultSelected={selectedFilter} />
            </MenuContainer>
          </div>

          <div className={classes.searchContainer}>
            <img src={magnifier} alt="magnifier" />
            <input
              type="text"
              placeholder="Search projects"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.right}>
          <h4>Select Network</h4>

          <div className={classes.networks}>
            {allNetworks.map((el, idx) => {
              return (
                <div className={classes.networkWrapper} key={"network-" + idx}>
                  <div
                    className={clsx(
                      classes.networkContainer,
                      selectedNetwork.toLowerCase() ===
                        el.networkName.toLowerCase() && classes.active
                    )}
                    onClick={() => {
                      setSelectedNetwork(el.networkName);
                    }}
                  >
                    <img src={el.networkIcon} alt={el.networkName} />
                  </div>
                  <p className={classes.networkName}>{el.networkName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={classes.projectInfoWrap}>
        {currentTableData.map((el, idx) => {
          return (
            <SingleProject
              key={idx}
              {...el}
              idx={idx}
              selectedNetwork={selectedNetwork}
            />
          );
        })}
      </div>
      <div className={classes.actions}>
        <div className={classes.loadMoreAndDropDown}>
          {" "}
          <div className={classes.rowsContainer}>
            <div>Row Per Page</div>
            <MenuContainer
              onSelect={(val) => setItemsPerPage(val.label)}
              options={[{ label: 5 }, { label: 10 }, { label: 15 }]}
              defaultSelected={itemsPerPage}
            >
              <div className={classes.rowSelector}>
                {itemsPerPage} <div className={classes.line}></div>{" "}
                <img src={arrowDropdown2} alt="arrow" />
              </div>
            </MenuContainer>
          </div>
          {/* <LoadMore /> */}
          <Pagination
            // className="pagination-bar"
            currentPage={currentPage}
            totalCount={rawProjects.length}
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
