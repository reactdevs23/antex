import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

import MenuContainer from "../../components/common/MenuContainer/MenuContainer";
import LoadMore from "../../components/common/LoadMore/LoadMore";
import classes from "./LeaderBoard.module.css";
import { arrowDropdown2, magnifier } from "../../images";
import DataTable from "./DataTable/DataTable";
import Tabs from "../../components/Staking/Tabs/Tabs";

const LeaderBoard = () => {
  const [searchState, setSearchState] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return currentItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, currentItems]);
  const rawData = [
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "cullinan",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "legacy",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "Regal",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
    {
      address: "0xf371.....cf47",
      amountStaked: "100,000,000",
      earnings: "100,000,000",
      stakingPool: "VIP lV",
    },
  ];
  useEffect(() => {
    const filterd = rawData.filter((el) => {
      if (!el.address.toLowerCase().includes(searchState.toLowerCase())) {
        return false;
      }

      return true;
    });

    setCurrentItems(filterd);
  }, [searchState]);

  return (
    <div className={[classes.mainWrapper, "mainWrapper"].join(" ")}>
      <Tabs />
      <div className={classes.wrapper}>
        <div className={classes.tableHeading}>
          <h3 className={classes.pageTitle}>
            staking Leaderboard{" "}
            <span className={classes.tag}>{rawData.length}</span>
          </h3>
          <p className={classes.myPostion}>
            My position-<span className={classes.positonNumber}>#naN</span>{" "}
          </p>
          <div className={classes.searchContainer}>
            <img src={magnifier} alt="search" />
            <input
              type="text"
              placeholder="Search by Address or ENS "
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
                options={[
                  { label: 5 },
                  { label: 10 },
                  { label: 15 },
                  { label: 30 },
                ]}
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

export default LeaderBoard;
