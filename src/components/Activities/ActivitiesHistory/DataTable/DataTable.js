import React from "react";
import clsx from "clsx";

import classes from "./DataTable.module.css";
import { openLink } from "../../../../images";

const DataTable = ({ data }) => {
  return (
    <div className={classes.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Date</th>
            <th>Amount(BST)</th>
            <th>Status</th>

            <th className={classes.txIdContainer}>tx ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, idx) => {
            return (
              <tr key={"table-row-" + idx}>
                <td>
                  <div className={classes.action}>
                    <img
                      className={classes.actionImg}
                      src={el.actionImg}
                      alt=""
                    />
                    <div className="">
                      {el.action.slice(0, 17)}{" "}
                      {el.action.length > 17 ? "..." : ""}
                    </div>
                  </div>
                </td>

                <td>
                  <div>{el.date.toDateString()}</div>
                </td>
                <td>
                  <div>{el.amount}</div>
                </td>
                <td>
                  <div
                    className={clsx(
                      el.status === "Confirmed" ? classes.green : classes.red
                    )}
                  >
                    {el.status}
                  </div>
                </td>
                <td className={classes.txIdContainer}>
                  {" "}
                  <div className={classes.txId}>
                    {el.txId} <img src={openLink} alt="" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
