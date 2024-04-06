import React, { createContext, useState, useContext, ReactNode } from 'react';

type PanelVisibilityContextType = {
  isPanelVisible: boolean;
  setPanelVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const PanelVisibilityContext = createContext<PanelVisibilityContextType | undefined>(undefined);

export const usePanelVisibility = () => {
  const context = useContext(PanelVisibilityContext);
  if (!context) {
    throw new Error('usePanelVisibility must be used within a PanelVisibilityProvider');
  }
  return context;
};

type PanelVisibilityProviderProps = {
  children: ReactNode;
};

export const PanelVisibilityProvider: React.FC<PanelVisibilityProviderProps> = ({ children }) => {
  const [isPanelVisible, setPanelVisible] = useState<boolean>(true);  // Panel visible by default

  return (
    <PanelVisibilityContext.Provider value={{ isPanelVisible, setPanelVisible }}>
      {children}
    </PanelVisibilityContext.Provider>
  );
};
