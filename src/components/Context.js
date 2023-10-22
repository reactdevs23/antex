import { useState, useContext, createContext } from "react";

const StateData = createContext();

export const ContextProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [showWalletNotConnectedModal, setShowWalletNotConnectedModal] =
    useState(false);
  const [vestingForTWallet, setVestingForWallet] = useState(false);
  const [showNoVestingForThisWallet, setShowNoVestingForThisWallet] =
    useState(false);
  const [showBuyBstModal, setShowBuyBstModal] = useState(false);

  const numberFormator = (number) => {
    const [beforeDecimal, afterDecimal] = number.toString().split(".");
    return [+beforeDecimal, +afterDecimal];
  };

  return (
    <StateData.Provider
      value={{
        walletConnected,
        setWalletConnected,
        showWalletNotConnectedModal,
        setShowWalletNotConnectedModal,
        vestingForTWallet,
        setVestingForWallet,
        showNoVestingForThisWallet,
        setShowNoVestingForThisWallet,
        numberFormator,
        showBuyBstModal,
        setShowBuyBstModal,
      }}
    >
      {children}
    </StateData.Provider>
  );
};
export const useDataContext = () => useContext(StateData);
