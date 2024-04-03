
import { TradingPairProvider } from './components/TradingPairContext';
import TVWidget from './components/TVWidget';
import { DarkModeContext, DarkModeProvider } from './components/DarkModeContext';
import SignalProcessor from './components/SignalProcessorWidget'; // Adjust the path as necessary
import React, { useState, useContext } from 'react';
import { Responsive as ResponsiveGridLayout, WidthProvider } from 'react-grid-layout'; 
import { AppBar, Box, Button, CssBaseline, ThemeProvider, Toolbar, Typography, IconButton, createTheme } from '@mui/material';
//import 'react-grid-layout/css/styles.css';
//import 'react-resizable/css/styles.css';
import DefaultTopBar from './topbars/DefaultTopBar';



function TradeEngineComponent() {

 const [signals, setSignals] = React.useState([]);

return (
  <>


        <DefaultTopBar />
   

            <TVWidget />
        </>
)
    }  ;



export default TradeEngineComponent;