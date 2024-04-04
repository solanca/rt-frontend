import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/index.css'
import { ReactFlowProvider} from '@xyflow/react';

// contexts and global
import { TradingPairProvider } from './pages/components/TradingPairContext';
import { DarkModeProvider } from './pages/components/DarkModeContext';
import { PanelVisibilityProvider } from './pages/components/PanelVisibilityContext';
import { ActivePageProvider } from './pages/components/ActivePageContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactFlowProvider>
    <ActivePageProvider>
        <PanelVisibilityProvider>
    <DarkModeProvider>
      <TradingPairProvider>
        <App />
      </TradingPairProvider>
    </DarkModeProvider>
      </PanelVisibilityProvider>
          </ActivePageProvider>
           </ReactFlowProvider>
  </React.StrictMode>,
)
