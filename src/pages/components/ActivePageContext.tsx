import React, { createContext, useState, useContext, ReactNode } from 'react';

type ActivePageContextType = {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

const ActivePageContext = createContext<ActivePageContextType | undefined>(undefined);

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (!context) {
    throw new Error('useActivePage must be used within a ActivePageProvider');
  }
  return context;
};

type ActivePageProviderProps = {
  children: ReactNode;
};

export const ActivePageProvider: React.FC<ActivePageProviderProps> = ({ children }) => {
  const [activePage, setActivePage] = useState<string>('home');

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
  
};
