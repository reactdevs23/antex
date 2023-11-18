import { useEffect } from "react";
import clsx from "clsx";
import TrueFalse from "../../common/TrueFalse/TrueFalse";
import ReserveSpot from "../../../components/Popups/ReserveSpot/ReserveSpot";
import { useTimer } from "react-timer-hook";
import {
  bnb,
  binanceCoin,
  dribbble,
  messenger,
  upcoming,
  whatsapp,
  youtube,
  porjectImage,
  buyCoinInserter,
  live,
  ended,
} from "../../../images";
import ProgressBar from "../../common/Progressbar/Progressbar";
import { useState } from "react";
import RegisterHinox from "../../Popups/RegisterHinox/RegisterHinox";
import { handleKeyDown } from "../../utils";
import MyCountDown from "../../common/CountDown/CountDown";
import WaitingForConfirmation from "../../Popups/RegisterHinox/WaitingForConfirmation/WaitingForConfirmation";
import RegistrationCompletedModal from "../../Popups/RegisterHinox/RegistrationCompletedModal/RegistrationCompletedModal";
import classes from "./Hero.module.css";
const time = new Date();
time.setSeconds(time.getSeconds() + 60 * 60 * 25 + 60 * 60);

const Hero = () => {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
  });

  const [startRegistrationModal, setStartRegistrationModal] = useState();
  const [contributor, setContributor] = useState(true);
  const [staker, setStaker] = useState(false);
  const [registerd, setRegisterd] = useState(false);
  const [waitingModalForConfirmationModal, setWaitingForConfirmatinModal] =
    useState(false);
  const [registrationCompletedModal, setRegistrationCompletedModal] =
    useState(false);
  const [showReserveSpotModal, setShowReserveSpotModal] = useState(false);
  const [reserveSpot, setReserveSpot] = useState(false);
  const [salesEnded, setSaleEnded] = useState(false);
  const [salesStarted, setSalesStarted] = useState(false);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Set body overflow based on the modal visibility
    document.body.style.overflow =
      startRegistrationModal ||
      waitingModalForConfirmationModal ||
      registrationCompletedModal ||
      showReserveSpotModal
        ? "hidden"
        : "auto";
    // Cleanup function to reset body overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [
    startRegistrationModal,
    waitingModalForConfirmationModal,
    registrationCompletedModal,
    showReserveSpotModal,
  ]);
  return (
    <>
      <div className={[classes.hero, "mainWrapper"].join(" ")}>
        <div className={classes.heroMain}>
          <div className={classes.card1}>
            <div className={classes.cardTitle}>
              <div className={classes.cardLeft}>
                <img src={porjectImage} alt="binance coin" />
                <div>
                  <h4>Binance Chain</h4>
                  <p>
                    <small>Token Symbol:</small> BNB
                  </p>
                </div>
              </div>
              <div className={classes.cardRight}>
                {/* <div className={classes.live}>
                  <img src={live} alt="live" /> Live
                </div> 
                <div className={classes.ended}>
                  <img src={ended} alt="ended" /> Ended
                </div> */}
                <div className={classes.upcoming}>
                  <img src={upcoming} alt="upcoming" /> Upcoming
                </div>
                <p className={classes.approx}>
                  <small>1 BNB ≈</small> 0.58 USDT
                </p>
              </div>
            </div>
            <div className={classes.cardBody}>
              <p>
                Introducing Panda, the cryptocurrency project with a user
                interface design that stands out like no other! Get ready to
                embark on a journey of seamless transactions, effortless
                navigation, and beautiful aesthetics. Panda is here to make your
                cryptocurrency experience smoother, faster, and more enjoyable.
              </p>
            </div>
            <div className={classes.cardFooter}>
              <div className={classes.top}>
                <div className={classes.bnbContainer}>
                  <div className={classes.btn}>
                    <img src={bnb} alt="bnb" />
                  </div>
                  <div className={classes.text}>
                    <div className={classes.light}>IDO ON:</div>
                    <div className={classes.white}>BSC</div>
                  </div>
                </div>

                <button className={clsx(classes.btn, classes.lg)}>
                  Read Whitepaper
                </button>
              </div>
              <div className={classes.bottom}>
                <button className={classes.btn}>
                  <img src={dribbble} alt="dribbble" />
                </button>
                <button className={classes.btn}>
                  <img src={youtube} alt="youtube" />
                </button>
                <button className={classes.btn}>
                  <img src={whatsapp} alt="whatsapp" />
                </button>
                <button className={classes.btn}>
                  <img src={messenger} alt="messenger" />
                </button>
              </div>
            </div>
          </div>
          <div className={classes.card2}>
            <div className={classes.cardTitle}>
              <TrueFalse />
              <div className={classes.cardTitleRight}>
                <div className={classes.IdoBtn}>
                  <span className={classes.IdoBtnTxt}>PROTECTED IDO</span>
                </div>
                <div className={classes.roundEnds}>Round Ends</div>
                <div className={classes.roundTime}>
                  <MyCountDown dayCount="2023-11-15T00:00:00" hourMinSec />
                </div>
              </div>
            </div>
            <div className={classes.cardBody}>
              <div className={classes.loaderTop}>
                <div>Round</div>
                <div className={classes.white}>Community</div>
              </div>
              <ProgressBar progress={60} overlay background="#1CED86" />

              <div className={classes.loaderBottom}>
                <div>
                  sold Token: <span className={classes.white}>600k/1.25M</span>
                </div>
                <div>
                  Raise: <span className={classes.white}>600k/1.25M</span>
                </div>
              </div>
            </div>
            {!salesStarted && (
              <div className={classes.cardFooter}>
                {registerd && reserveSpot && (
                  <button
                    className={[
                      classes.button,
                      classes.notRegistered,
                      salesEnded && classes.salesEnded,
                    ].join(" ")}
                  >
                    {salesEnded ? " Sales Ended" : "You have Registered"}
                  </button>
                )}
                {!registerd && (
                  <button
                    className={classes.button}
                    onClick={() => setStartRegistrationModal(true)}
                  >
                    Register
                  </button>
                )}
                {registerd && !reserveSpot && (
                  <button
                    className={classes.button}
                    onClick={() => {
                      setShowReserveSpotModal(true);
                    }}
                  >
                    Reserve Spot
                  </button>
                )}
              </div>
            )}
            {salesStarted && (
              <div className={classes.cardFooter}>
                <div className={classes.inputContainer}>
                  <img src={buyCoinInserter} alt="" />

                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={classes.input}
                    placeholder="Amount"
                  />
                  <p className={classes.max}>Max</p>
                </div>
                <button className={classes.buyButton}>Buy UBS</button>
              </div>
            )}
          </div>
        </div>
      </div>
      {startRegistrationModal && (
        <RegisterHinox
          setModal={setStartRegistrationModal}
          contributor={contributor}
          staker={staker}
          showReserveSpotModal={showReserveSpotModal}
          setShowReserveSpotModal={setShowReserveSpotModal}
          setRegisterd={setRegisterd}
          setReserveSpot={setReserveSpot}
          setWaitingForConfirmatinModal={setWaitingForConfirmatinModal}
        />
      )}
      {showReserveSpotModal && (
        <ReserveSpot
          setReserveSpot={setReserveSpot}
          setShowReserveSpotModal={setShowReserveSpotModal}
        />
      )}
      {waitingModalForConfirmationModal && (
        <WaitingForConfirmation
          setWaitingForConfirmatinModal={setWaitingForConfirmatinModal}
          setRegistrationCompletedModal={setRegistrationCompletedModal}
          setRegisterd={setRegisterd}
        />
      )}
      {registrationCompletedModal && (
        <RegistrationCompletedModal
          setModal={setStartRegistrationModal}
          setReserveSpotModal={setShowReserveSpotModal}
          setRegistrationCompletedModal={setRegistrationCompletedModal}
        />
      )}
    </>
  );
};

export default Hero;
