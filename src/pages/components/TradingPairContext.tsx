import React, { createContext, useState, useContext, ReactNode } from 'react';

type TradingPairContextType = {
  selectedPair: string | null;
  setSelectedPair: React.Dispatch<React.SetStateAction<string | null>>;
};

const TradingPairContext = createContext<TradingPairContextType | undefined>(undefined);

export const useTradingPair = () => {
  const context = useContext(TradingPairContext);
  if (!context) {
    throw new Error('useTradingPair must be used within a TradingPairProvider');
  }
  return context;
};

type TradingPairProviderProps = {
  children: ReactNode;
};

export const TradingPairProvider: React.FC<TradingPairProviderProps> = ({ children }) => {
  const [selectedPair, setSelectedPair] = useState<string | null>(null);

  return (
    <TradingPairContext.Provider value={{ selectedPair, setSelectedPair }}>
      {children}
    </TradingPairContext.Provider>
  );
};
