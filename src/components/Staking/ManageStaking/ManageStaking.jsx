import { Link } from "react-router-dom";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import classes from "./ManageStaking.module.css";

const ManageStaking = () => {
  return (
    <section className="mainWrapper">
      <SectionTitle>Staking and sales information</SectionTitle>

      <div className={classes.stakingTable}>
        <table>
          <thead>
            <tr>
              <th>Staking Pool</th>
              <th>Pool Advantage</th>
              <th>Pool Requirement</th>
              <th>Pool Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                hiDAO Executives
                <div className={classes.light}>(Contributors round)</div>
              </td>
              <td>
                <ul className={classes.list}>
                  <li>Guaranteed Allocation</li>
                  <li>eligible for private sales</li>
                  <li>exclusive access for Gold sales</li>
                  <li> vote on incubation</li>
                  <li> vote on Governance</li>
                </ul>
              </td>
              <td>
                <div className={classes.box}>
                  Determined by Percentage ownership stake/DAO contribution.
                  <Link to="/">Learn more</Link>
                </div>
              </td>
              <td>6x fixed multiplier</td>
            </tr>
            <tr>
              <td>
                Staking Pool
                <div className={classes.light}>(Staking Round)</div>
              </td>
              <td>
                <ul className={classes.list}>
                  <li>Guaranteed Allocation</li>
                  <li>eligible for private sales</li>
                  <li>
                    exclusive access for Gold sales
                    <div className={classes.light}>
                      (Cullinan and Legacy Only)
                    </div>
                  </li>
                  <li> vote on Governance</li>
                </ul>
              </td>
              <td>
                <div className={classes.box}>
                  You are required to stake a minimum of 250 $BST tokens to
                  qualify for registration
                  <Link to="/"> Learn more</Link>
                </div>
              </td>
              <td>
                <div className={classes.box}>
                  <div className={classes.boxItem}>
                    <div>Cullinan:</div>
                    <div>3.5x</div>
                  </div>
                  <div className={classes.boxItem}>
                    <div>Legacy:</div>
                    <div>2x</div>
                  </div>
                  <div className={classes.boxItem}>
                    <div>Regal:</div>
                    <div>1.5x</div>
                  </div>
                  <div className={classes.boxItem}>
                    <div>Standard:</div>
                    <div>1x</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                Community round
                <div className={classes.light}>(Staking Not required)</div>
              </td>
              <td className="text-center"> FCFS</td>
              <td>
                <div className={classes.box}>
                  NoThere’s no allocation slot for this round except in cases
                  where there’re unsold tokens after Contributor and stakers
                  round
                </div>
              </td>
              <td className="text-center">FCFS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageStaking;
