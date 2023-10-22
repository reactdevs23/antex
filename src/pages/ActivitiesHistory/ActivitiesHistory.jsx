import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

import Dropdown from "../../components/common/Dropdown/Dropdown";
import DatePicker from "../../components/common/DatePicker/DatePicker";

import classes from "./ActivitiesHistory.module.css";
import MenuContainer from "../../components/common/MenuContainer/MenuContainer";
import LoadMore from "../../components/common/LoadMore/LoadMore";
import {
  arrowDropdown2,
  magnifier,
  tableHarvested,
  tableLock,
  tableStake,
  tableWithdrawal,
} from "../../images";
import DataTable from "./DataTable/DataTable";
import Tabs from "../../components/Staking/Tabs/Tabs";

const ActivitiesHistory = () => {
  const [searchState, setSearchState] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All Activities");
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [formState, setFormState] = useState({
    startDate: "",
    endDate: "",
  });
  const rawData = [
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 5, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 6, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xasd1.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 7, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xdae71.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 8, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xbc98.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 9, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 5, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 6, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xasd1.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 7, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xdae71.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 8, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xbc98.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 9, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 5, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 6, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xasd1.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 7, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xdae71.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 8, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xbc98.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 9, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Stake for 12 months",
      type: "stake",
      actionImg: tableStake,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Unstaged from 30 kjasdfasdf",
      type: "unstaged",
      actionImg: tableLock,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Harvested from 30 kjasdfasdf",
      type: "harvested",
      actionImg: tableHarvested,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Unconfirmed",
      txId: "0xf371.....cf47",
    },
    {
      action: "Withdrawal",
      type: "withdrawal",
      actionImg: tableWithdrawal,
      date: new Date(2022, 2, 21),
      amount: "100,000,000",
      status: "Confirmed",
      txId: "0xf371.....cf47",
    },
  ];

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return currentItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, currentItems]);

  useEffect(() => {
    const filterd = rawData.filter((el) => {
      if (!el.txId.toLocaleLowerCase().includes(searchState.toLowerCase())) {
        return false;
      }

      if (formState.startDate) {
        if (!(el.date.getTime() >= formState.startDate.getTime())) {
          return false;
        }
      }

      if (formState.endDate) {
        if (!(el.date.getTime() <= formState.endDate.getTime())) {
          return false;
        }
      }

      if (selectedFilter !== "All Activities") {
        if (selectedFilter === "Stake" && el.type !== "stake") return false;
        else if (selectedFilter === "Unstaged" && el.type !== "unstaged")
          return false;
        else if (selectedFilter === "Harvested" && el.type !== "harvested")
          return false;
        else if (selectedFilter === "Withdrawal" && el.type !== "withdrawal")
          return false;
      }

      return true;
    });

    setCurrentItems(filterd);
  }, [selectedFilter, searchState, formState]);

  return (
    <div className={[classes.mainWrapper, "mainWrapper"].join(" ")}>
      <Tabs />
      <div className={classes.wrapper}>
        <h2 className={classes.pageTitle}>Activities History</h2>
        <div className={classes.tableHeading}>
          <MenuContainer
            onSelect={(val) => setSelectedFilter(val.label)}
            options={[
              { label: "All Activities" },
              { label: "Stake" },
              { label: "Unstaged" },
              { label: "Harvested" },
              { label: "Withdrawal" },
            ]}
            defaultSelected={selectedFilter}
          >
            <Dropdown label="Sort by:" defaultSelected={selectedFilter} />
          </MenuContainer>
          <DatePicker
            onChange={(date) =>
              setFormState((prev) => ({ ...prev, startDate: date }))
            }
            value={formState.startDate}
            placeholder="Start Date"
          />
          <DatePicker
            onChange={(date) =>
              setFormState((prev) => ({ ...prev, endDate: date }))
            }
            value={formState.endDate}
            placeholder="End Date"
          />
          <div className={classes.searchContainer}>
            <img src={magnifier} alt="search" />
            <input
              type="text"
              placeholder="Search by tx ID"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.tableContainer}>
          <DataTable data={currentTableData} />
        </div>

        <div className={classes.actions}>
          <div className={classes.loadMoreAndDropDown}>
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
          </div>

          <ReactPaginate
            className="staking-table-pagination"
            breakLabel="..."
            nextLabel={<></>}
            onPageChange={(event) => setCurrentPage(event.selected)}
            pageRangeDisplayed={2}
            pageCount={currentItems.length}
            previousLabel={<></>}
            renderOnZeroPageCount={null}
            marginPagesDisplayed={2}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesHistory;
