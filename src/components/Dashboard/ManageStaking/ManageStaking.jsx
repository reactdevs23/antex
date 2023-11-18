import { useState, useEffect } from "react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import LockedUnlock from "../../Popups/LockedUnlock/LokedUnlock";
import classes from "./ManageStaking.module.css";

const ManageStaking = () => {
  const [modal, setModal] = useState(false);
  const data = [
    {
      title: "HiDAO executives",
      apy: "30%",
      duration: "12 months",
      activities: "1",

      points: "1,200,000 BP",
      earningRate: "0.03% daily",
      totalStaked: {
        bst: 10000000,
        usd: 17056.5,
      },
      myEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
      bg: "#E8FFCE",
    },
    {
      title: "Legacy",
      apy: "30%",
      duration: "12 months",
      activities: "1",

      points: "1,200,000 BP",
      earningRate: "0.03% daily",
      totalStaked: {
        bst: 10000000,
        usd: 17056.5,
      },
      myEarnings: {
        bst: 10000000,
        usd: 17056.5,
      },
      bg: "#ACFADF",
    },
  ];
  useEffect(() => {
    // Set body overflow based on the modal visibility
    document.body.style.overflow = modal ? "hidden" : "auto";

    // Cleanup function to reset body overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);
  return (
    <div id="manage">
      <div className={classes.title}>
        <SectionTitle tag={data.length}>Manage your staking</SectionTitle>
      </div>

      <div className={classes.stakings}>
        {data.map((el, i) => (
          <div className={classes.stakingItem} key={i}>
            <h4>{el.title}</h4>

            <div className={classes.stakingItemContent}>
              <div className={classes.percent1} style={{ background: el.bg }}>
                <div className={classes.mainText}>{el.apy}</div>
                <div className={classes.subText}>APY</div>
              </div>
              <div>
                <div className={classes.label}>Duration</div>
                <div className={classes.value}>{el.duration}</div>
              </div>
              <div>
                <div className={classes.label}>Activities</div>
                <div className={classes.value}>{el.activities}</div>
              </div>
              <div>
                <div className={classes.label}>APY</div>
                <div className={classes.value}>{el.apy}</div>
              </div>
              <div>
                <div className={classes.label}>Points</div>
                <div className={classes.value}>{el.points}</div>
              </div>
              <div>
                <div className={classes.label}>Earning Rate</div>
                <div className={classes.value}>{el.earningRate}</div>
              </div>
              <div>
                <div className={classes.label}>Total staked</div>
                <div className={classes.value}>
                  {el.totalStaked.bst.toLocaleString()} BST
                </div>
                <div className={classes.value}>
                  ≈{" "}
                  <span className={classes.green}>
                    ${el.totalStaked.usd.toLocaleString()}
                  </span>
                </div>
              </div>
              <div>
                <div className={classes.label}>My earnings</div>
                <div className={classes.value}>
                  ${el.myEarnings.bst.toLocaleString()} BST
                </div>
                <div className={classes.value}>
                  ≈{" "}
                  <span className={classes.green}>
                    ${el.myEarnings.usd.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className={classes.actionsWrap}>
                <div className={classes.actions}>
                  <button>Harvest All</button>
                  <button onClick={() => setModal(true)}>Manage</button>
                </div>
              </div>
            </div>
            {modal && <LockedUnlock setModal={setModal} />}
          </div>
        ))}
        {/* <div className={classes.stakingItem}>
          <h4>Legacy</h4>

          <div className={classes.stakingItemContent}>
            <div className={classes.percent2}>
              <div className={classes.mainText}>13%</div>
              <div className={classes.subText}>APY</div>
            </div>
            <div>
              <div className={classes.label}>Duration</div>
              <div className={classes.value}>12 months</div>
            </div>
            <div>
              <div className={classes.label}>Activities</div>
              <div className={classes.value}>1</div>
            </div>
            <div>
              <div className={classes.label}>APY</div>
              <div className={classes.value}>20%</div>
            </div>
            <div>
              <div className={classes.label}>Points</div>
              <div className={classes.value}>1,200,000 BP</div>
            </div>
            <div>
              <div className={classes.label}>Earning Rate</div>
              <div className={classes.value}>0.03% daily</div>
            </div>
            <div>
              <div className={classes.label}>Total staked</div>
              <div className={classes.value}>100,000,00 BST</div>
              <div className={classes.value}>
                ≈ <span className={classes.green}>$17056.5</span>
              </div>
            </div>
            <div>
              <div className={classes.label}>My earnings</div>
              <div className={classes.value}>100,000,00 BST</div>
              <div className={classes.value}>
                ≈ <span className={classes.green}>$17056.5</span>
              </div>
            </div>
            <div className={classes.actionsWrap}>
              <div className={classes.actions}>
                <button>Harvest All</button>
                <button>Manage</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ManageStaking;
