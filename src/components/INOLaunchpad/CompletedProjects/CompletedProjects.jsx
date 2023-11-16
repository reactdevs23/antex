import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

import SectionTitle from "../../common/SectionTitle/SectionTitle";

import Dropdown from "../../common/Dropdown/Dropdown";
// import LoadMore from "../../common/LoadMore/LoadMore";
import MenuContainer from "../../common/MenuContainer/MenuContainer";
import Pagination from "../../common/Pagination/Pagination";
import { arrowDropdown2, magnifier, tableProjectItem } from "../../../images";
import classes from "./CompletedProjects.module.css";

const data = [
  {
    icon: tableProjectItem,
    name: "AHinox Ecosystem unique",
    hit: true,
    participants: 1000000,
    access: "Private",
    idoPrice: 1,
    currentPrice: 2,
    ath: 3,
    athIDORoi: 17.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000000,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "11 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "BHinox Ecosystem",
    hit: true,
    participants: 1000001,
    access: "Private",
    idoPrice: 4,
    currentPrice: 5,
    ath: 6,
    athIDORoi: 18.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000001,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "10 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "CHinox Ecosystem",
    hit: true,
    participants: 1000002,
    access: "Public",
    idoPrice: 7,
    currentPrice: 8,
    ath: 9,
    athIDORoi: 19.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000002,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "9 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "DHinox Ecosystem",
    hit: true,
    participants: 1000003,
    access: "Private",
    idoPrice: 10,
    currentPrice: 11,
    ath: 12,
    athIDORoi: 20.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000003,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "EHinox Ecosystem",
    hit: true,
    participants: 1000004,
    access: "DAO Incubated",
    idoPrice: 13,
    currentPrice: 14,
    ath: 15,
    athIDORoi: 21.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000004,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "8 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "AHinox Ecosystem unique",
    hit: true,
    participants: 1000000,
    access: "Private",
    idoPrice: 1,
    currentPrice: 2,
    ath: 3,
    athIDORoi: 17.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000000,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "11 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "BHinox Ecosystem",
    hit: true,
    participants: 1000001,
    access: "Private",
    idoPrice: 4,
    currentPrice: 5,
    ath: 6,
    athIDORoi: 18.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000001,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "10 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "CHinox Ecosystem",
    hit: true,
    participants: 1000002,
    access: "Public",
    idoPrice: 7,
    currentPrice: 8,
    ath: 9,
    athIDORoi: 19.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000002,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "9 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "DHinox Ecosystem",
    hit: true,
    participants: 1000003,
    access: "Private",
    idoPrice: 10,
    currentPrice: 11,
    ath: 12,
    athIDORoi: 20.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000003,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April 2022",
  },
  {
    icon: tableProjectItem,
    name: "EHinox Ecosystem",
    hit: true,
    participants: 1000004,
    access: "DAO Incubated",
    idoPrice: 13,
    currentPrice: 14,
    ath: 15,
    athIDORoi: 21.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000004,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "8 April 2022",
  },
];

const tags = [
  {
    label: "All",
  },
  {
    label: "Public Sales",
  },
  {
    label: "Private Sales",
  },
  {
    label: "DAO Incubated",
  },
];

const CompletedProjects = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSorter, setSelectedSorter] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedOrder, setSelectedOrder] = useState("asc");

  //filtefint

  const filteredData = useMemo(() => {
    return data
      .filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .filter((item) => {
        if (selectedFilter === "All") {
          return true;
        } else if (selectedFilter === "Public Sales") {
          return item.access === "Public";
        } else if (selectedFilter === "Private Sales") {
          return item.access === "Private";
        } else if (selectedFilter === "DAO Incubated") {
          return item.access === "DAO Incubated";
        }
        return false;
      })
      .sort((a, b) => {
        const aDate = new Date(a.salesDate);
        const bDate = new Date(b.salesDate);
        if (selectedSorter === "ATH ROI") {
          return a.athIDORoi - b.athIDORoi;
        } else if (selectedSorter === "Total Raised") {
          return a.hinox - b.hinox;
        } else if (selectedSorter === "Sales Date") {
          return aDate - bDate;
        }
        if (selectedOrder === "asc") {
          return aDate - bDate;
        } else if (selectedOrder === "desc") {
          return bDate - aDate;
        }
        return 0; // No sorting by default
      });
  }, [searchValue, selectedOrder, selectedSorter, selectedFilter]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, filteredData]);

  return (
    <div className={["mainWrapper", classes.wrapper].join(" ")}>
      <SectionTitle tag={103}>COMPLETED PROJECTS</SectionTitle>
      <div className={classes.filterContainer}>
        <div className={classes.tags}>
          {tags.map((el, idx) => {
            return (
              <button
                key={"tab-" + idx}
                className={clsx(
                  classes.tag,
                  el.label === selectedFilter && classes.active
                )}
                onClick={() => setSelectedFilter(el.label)}
              >
                {el.label}
              </button>
            );
          })}
        </div>

        <div className={classes.searchContainer}>
          <img src={magnifier} alt="magnifier" />
          <input
            type="text"
            placeholder="Search by project name"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className={classes.filterContainer2}>
        <div className={classes.tags}>
          <button
            className={clsx(
              classes.tag,
              selectedOrder === "asc" && classes.active
            )}
            onClick={() => {
              setSelectedOrder("asc");
              setSelectedSorter(" ");
            }}
          >
            Ascending order
          </button>
          <button
            className={clsx(
              classes.tag,
              selectedOrder === "desc" && classes.active
            )}
            onClick={() => {
              setSelectedOrder("desc");
              setSelectedSorter(" ");
            }}
          >
            Descending order
          </button>
        </div>
        <MenuContainer
          className={classes.sorterFilter}
          onSelect={(val) => setSelectedSorter(val.label)}
          options={[
            { label: "ATH ROI" },
            { label: "Total Raised" },
            { label: "Sales Date" },
          ]}
          defaultSelected={selectedSorter}
        >
          <Dropdown label="Sort by:" defaultSelected={selectedSorter} />
        </MenuContainer>
      </div>
      <div className={classes.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Participants</th>
              <th>Access</th>
              <th>IDO price</th>
              <th>Curre..price</th>
              <th>ATH</th>
              <th>ATH IDO ROI</th>
              <th>Raised on Hinox</th>
              <th>lead VC</th>
              <th>sales Date</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((el, idx) => {
              return (
                <tr key={"table-row-" + idx}>
                  <td className={classes.item}>
                    <div className={classes.withImage}>
                      <img src={el.icon} alt="project" />
                      <div>
                        {el.name}
                        {el.hit && (
                          <div className={classes.light}>
                            <span> (HIT)</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{el.participants}</td>
                  <td>{el.access}</td>
                  <td>{el.idoPrice}</td>
                  <td>{el.currentPrice}</td>
                  <td>{el.ath}</td>
                  <td>
                    {el.athIDORoi}{" "}
                    <div className={classes.green}>{el.athIDORoiGreen}</div>
                  </td>
                  <td>$ {el.hinox}</td>
                  <td>
                    <img src={el.leadVcIcon} alt="project" />
                    <div>{el.leadVc}</div>
                  </td>
                  <td>{el.salesDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={classes.actions}>
        <div className={classes.loadMoreAndDropDown}>
          <div className={classes.rowsContainer}>
            {" "}
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

export default CompletedProjects;
