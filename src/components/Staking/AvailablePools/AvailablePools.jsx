import { useState } from "react";

import SectionTitle from "../../common/SectionTitle/SectionTitle";

import classes from "./AvailablePools.module.css";
import clsx from "clsx";

import MenuContainer from "../../common/MenuContainer/MenuContainer";

import { proceed } from "../../../images";

const AvailablePools = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <div className="mainWrapper">
      <div className={classes.pools}>
        <div className="text-center">
          <SectionTitle>Available Staking Pools</SectionTitle>
        </div>

        <div className={classes.stakings}>
          <div className={classes.stakingItem}>
            <div className={classes.stakingTitle}>
              <h4>HiDAO executives</h4>
              <h4>Access:Contributors</h4>
            </div>

            <div className={classes.stakingItemContent}>
              <div className={classes.percent1}>
                <div className={classes.mainText}>30%</div>
                <div className={classes.subText}>APY</div>
                <div className={classes.tag}>3.5x</div>
              </div>
              <div className={classes.stakingNumbers}>
                <div>
                  <div className={classes.label}>Duration</div>
                  <div className={classes.value}>12 months</div>
                </div>
                <div>
                  <div className={classes.label}>locked until</div>
                  <div className={classes.value}>24 months</div>
                </div>
                <div>
                  <div className={classes.label}>Earning Rate</div>
                  <div className={classes.value}>0.03% daily</div>
                </div>
                <div>
                  <div className={classes.label}>Min.Stake</div>
                  <div className={classes.value}>100,000,000 BST</div>
                </div>
                <div>
                  <div className={classes.label}>Staking Cap</div>
                  <div className={classes.value}>100,000,000 BST</div>
                </div>
                <div>
                  <div className={classes.label}>Pool Allocation</div>
                  <div className={classes.value}>40%</div>
                </div>
                <div>
                  <div className={clsx(classes.label, classes.statusLabel)}>
                    Status
                  </div>
                  <div className={clsx(classes.status, classes.active)}>
                    <div className={classes.statusDot}></div> Active
                  </div>
                </div>
              </div>
              <MenuContainer
                onSelect={(val) => setSelectedFilter(val.label)}
                options={[{ label: "Yes" }, { label: "No" }]}
                defaultSelected={selectedFilter}
              >
                <div className={classes.proceed}>
                  <img src={proceed} alt="proceed" />
                  Proceed
                </div>
              </MenuContainer>
            </div>
          </div>
          <div className={classes.stakingItem}>
            <div className={classes.stakingTitle}>
              <h4>Legacy</h4>
              <h4>Access:Contributors</h4>
            </div>

            <div className={classes.stakingItemContent}>
              <div className={classes.percent1}>
                <div className={classes.mainText}>30%</div>
                <div className={classes.subText}>APY</div>
                <div className={classes.tag}>3.5x</div>
              </div>
              <div className={classes.stakingNumbers}>
                <div>
                  <div className={classes.label}>Duration</div>
                  <div className={classes.value}>12 months</div>
                </div>
                <div>
                  <div className={classes.label}>locked until</div>
                  <div className={classes.value}>24 months</div>
                </div>
                <div>
                  <div className={classes.label}>Earning Rate</div>
                  <div className={classes.value}>0.03% daily</div>
                </div>
                <div>
                  <div className={classes.label}>Min.Stake</div>
                  <div className={classes.value}>100,000,000 BST</div>
                </div>
                <div>
                  <div className={classes.label}>Staking Cap</div>
                  <div className={classes.value}>100,000,000 BST</div>
                </div>
                <div>
                  <div className={classes.label}>Pool Allocation</div>
                  <div className={classes.value}>40%</div>
                </div>
                <div>
                  <div className={clsx(classes.label, classes.statusLabel)}>
                    Status
                  </div>
                  <div className={clsx(classes.status, classes.closed)}>
                    <div className={classes.statusDot}></div> Closed
                  </div>
                </div>
              </div>{" "}
              <MenuContainer
                onSelect={(val) => setSelectedFilter(val.label)}
                options={[{ label: "Yes" }, { label: "No" }]}
                defaultSelected={selectedFilter}
              >
                <div className={classes.proceed}>
                  <img src={proceed} alt="proceed" />
                  Proceed
                </div>
              </MenuContainer>
            </div>
          </div>{" "}
          <div className={classes.stakingItem}>
            <div className={classes.stakingTitle}>
              <h4>HiDAO executives</h4>
              <h4>Access:Contributors</h4>
            </div>

            <div className={classes.stakingItemContent}>
              <div className={classes.percent1}>
                <div className={classes.mainText}>30%</div>
                <div className={classes.subText}>APY</div>
                <div className={classes.tag}>3.5x</div>
              </div>
              <div className={classes.stakingNumbers}>
                <div>
                  <div className={classes.label}>Duration</div>
                  <div className={classes.value}>12 months</div>
                </div>
                <div>
                  <div className={classes.label}>locked until</div>
                  <div className={classes.value}>24 months</div>
                </div>
                <div>
                  <div className={classes.label}>Earning Rate</div>
                  <div className={classes.value}>0.03% daily</div>
                </div>
                <div>
                  <div className={classes.label}>Min.Stake</div>
                  <div className={classes.value}>100,000,000 BST</div>
                </div>
                <div>
                  <div className={classes.label}>Staking Cap</div>
                  <div className={classes.value}>100,000,000 BST</div>
                </div>
                <div>
                  <div className={classes.label}>Pool Allocation</div>
                  <div className={classes.value}>40%</div>
                </div>
                <div>
                  <div className={clsx(classes.label, classes.statusLabel)}>
                    Status
                  </div>
                  <div className={clsx(classes.status, classes.active)}>
                    <div className={classes.statusDot}></div> Active
                  </div>
                </div>
              </div>
              <MenuContainer
                onSelect={(val) => setSelectedFilter(val.label)}
                options={[{ label: "Yes" }, { label: "No" }]}
                defaultSelected={selectedFilter}
              >
                <div className={classes.proceed}>
                  <img src={proceed} alt="proceed" />
                  Proceed
                </div>
              </MenuContainer>
            </div>
          </div>
          <div className={classes.stakingItem}>
            <div className={classes.stakingTitle}>
              <h4>Legacy</h4>
              <h4>Access:Contributors</h4>
            </div>

            <div className={classes.stakingItemContent}>
              <div className={classes.percent1}>
                <div className={classes.mainText}>30%</div>
                <div className={classes.subText}>APY</div>
                <div className={classes.tag}>3.5x</div>
              </div>
              <div className={classes.stakingNumbers}>
                <div>
                  <div className={classes.label}>Duration</div>
                  <div className={classes.value}>12 months</div>
                </div>
                <div>
                  <div className={classes.label}>locked until</div>
                  <div className={classes.value}>24 months</div>
                </div>
                <div>
                  <div className={classes.label}>Earning Rate</div>
                  <div className={classes.value}>0.03% daily</div>
                </div>
                <div>
                  <div className={classes.label}>Min.Stake</div>
                  <div className={classes.value}>100,000,000 BST</div>
                </div>
                <div>
                  <div className={classes.label}>Staking Cap</div>
                  <div className={classes.value}>100,000,000 BST</div>
                </div>
                <div>
                  <div className={classes.label}>Pool Allocation</div>
                  <div className={classes.value}>40%</div>
                </div>
                <div>
                  <div className={clsx(classes.label, classes.statusLabel)}>
                    Status
                  </div>
                  <div className={clsx(classes.status, classes.closed)}>
                    <div className={classes.statusDot}></div> Closed
                  </div>
                </div>
              </div>{" "}
              <MenuContainer
                onSelect={(val) => setSelectedFilter(val.label)}
                options={[{ label: "Yes" }, { label: "No" }]}
                defaultSelected={selectedFilter}
              >
                <div className={classes.proceed}>
                  <img src={proceed} alt="proceed" />
                  Proceed
                </div>
              </MenuContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePools;
