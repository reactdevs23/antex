import { useState, useContext, createContext } from "react";

const StateData = createContext();

export const ContextProvider = ({ children }) => {
  const [showBuyBstModal, setShowBuyBstModal] = useState(false);

  const numberFormator = (number) => {
    const [beforeDecimal, afterDecimal] = number.toString().split(".");
    return [+beforeDecimal, +afterDecimal];
  };

  return (
    <StateData.Provider
      value={{ numberFormator, showBuyBstModal, setShowBuyBstModal }}
    >
      {children}
    </StateData.Provider>
  );
};
export const useDataContext = () => useContext(StateData);
