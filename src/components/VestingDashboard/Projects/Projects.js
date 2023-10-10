import { useEffect, useState, useMemo } from "react";
import MenuContainer from "../../../components/common/MenuContainer/MenuContainer";
import LoadMore from "../../../components/common/LoadMore/LoadMore";
import Pagination from "../../../components/common/Pagination/Pagination";
import classes from "./Projects.module.css";
import {
  arrowDropdown2,
  binance,
  ethereum,
  fifthNetwork,
  firstNetwork,
  fourthNetwork,
  magnifier,
  sixthNetwork,
} from "../../../images";
import clsx from "clsx";
import Dropdown from "../../../components/common/Dropdown/Dropdown";

import SingleProject from "./SingleProject/SingleProject";

const rawProjects = [
  {
    name: "CRYPTO PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Binance",
    claimable: true,
  },
  {
    name: "SECOND PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "First",
    claimable: false,
  },
  {
    name: "THIRD PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Ethereum",
    claimable: false,
  },
  {
    name: "FOURTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Fourth",
    claimable: false,
  },
  {
    name: "FIFTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Fifth",
    claimable: false,
  },
  {
    name: "SIXTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Sixth",
    claimable: true,
  },
];

const allNetworks = [
  { icon: firstNetwork, name: "First" },
  { icon: ethereum, name: "Ethereum" },
  { icon: binance, name: "Binance" },
  { icon: fourthNetwork, name: "Fourth" },
  { icon: fifthNetwork, name: "Fifth" },
  { icon: sixthNetwork, name: "Sixth" },
];

// 10 minutes timer

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Vesting");
  const [formState, setFormState] = useState({
    search: "",
    network: "",
  });
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredProjects.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, filteredProjects]);
  useEffect(() => {
    let filtered = rawProjects.filter((el) => {
      if (!el.name.toLowerCase().includes(formState.search.toLowerCase()))
        return false;

      if (selectedFilter !== "All Vesting") {
        if (selectedFilter === "Claimable Vesting" && !el.claimable)
          return false;
      }

      if (selectedNetwork) {
        if (el.claimNetworkName !== selectedNetwork) return false;
      }

      return true;
    });

    setFilteredProjects(filtered);
  }, [formState, selectedFilter, selectedNetwork]);

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
              value={formState.search}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, search: e.target.value }))
              }
            />
          </div>
        </div>
        <div className={classes.right}>
          <h4>Select Network</h4>

          <div className={classes.networks}>
            {allNetworks.map((el, idx) => {
              return (
                <div
                  key={"network-" + idx}
                  className={clsx(
                    classes.networkContainer,
                    selectedNetwork === el.name && classes.active
                  )}
                  onClick={() => {
                    if (selectedNetwork === el.name) setSelectedNetwork("");
                    else setSelectedNetwork(el.name);
                  }}
                >
                  <img src={el.icon} alt={el.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={classes.projectInfoWrap}>
        {currentTableData.map((el, idx) => {
          let icon = binance;

          if (el.claimNetworkName === "First") {
            icon = firstNetwork;
          } else if (el.claimNetworkName === "Ethereum") {
            icon = ethereum;
          } else if (el.claimNetworkName === "Fourth") {
            icon = fourthNetwork;
          } else if (el.claimNetworkName === "Fifth") {
            icon = fifthNetwork;
          } else if (el.claimNetworkName === "Sixth") {
            icon = sixthNetwork;
          }

          return (
            <SingleProject
              key={idx}
              icon={icon}
              {...el}
              idx={idx}
              selectedFilter={selectedFilter}
            />
          );
        })}
      </div>
      <div className={classes.actions}>
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
        <LoadMore />
        <Pagination
          // className="pagination-bar"
          currentPage={currentPage}
          totalCount={filteredProjects.length}
          pageSize={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          siblingCount={0}
        />
      </div>
    </div>
  );
};

export default Projects;
