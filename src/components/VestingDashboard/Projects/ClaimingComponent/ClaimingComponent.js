import React, { useState } from "react";
import { BiSolidChevronUpCircle } from "react-icons/bi";
import classes from "./ClaimingComponent.module.css";

const ClaimingComponent = ({ info, setShowClaimComponent }) => {
  const [data, setData] = useState(info);
  const handleClaimClick = (index) => {
    const updatedData = [...data];
    updatedData[index].claimed = true;
    setData(updatedData);
  };

  const handleAllClaimClick = () => {
    const updatedData = data.map((item) => ({ ...item, claimed: true }));
    setData(updatedData);
  };
  return (
    <div className={classes.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Schedule</th>
            <th>Token unlock</th>
            <th>Amount unlock</th>
            <th>Unlock at</th>
            <th>
              {" "}
              <button
                className={classes.claimAllButton}
                onClick={handleAllClaimClick}
              >
                Claim all Available
              </button>
            </th>
            <th>
              <BiSolidChevronUpCircle
                className={classes.arrow}
                onClick={() => setShowClaimComponent(null)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, idx) => {
            return (
              <tr key={"table-row-" + idx}>
                <td>{idx + 1}</td>
                <td>{el.tokenUnlock}</td>
                <td>
                  <p>
                    {el.amountUnlock.bnb}{" "}
                    <span className={classes.bold}>BNB</span>
                    (≈${el.amountUnlock.usd})
                  </p>
                </td>
                <td>
                  <p>{el.unlockAt}</p>
                </td>
                <td>
                  {el.claimed && (
                    <button
                      className={[classes.button, classes.claimedButton].join(
                        " "
                      )}
                    >
                      {el.claimed ? "Claimed" : "Claim"}
                    </button>
                  )}
                  {!el.claimed && (
                    <button
                      className={[classes.button, classes.unClaimedButton].join(
                        " "
                      )}
                      onClick={() => handleClaimClick(idx)}
                    >
                      {el.claimed ? "Claimed" : "Claim"}
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimingComponent;
