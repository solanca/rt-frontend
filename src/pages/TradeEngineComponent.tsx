
import { TradingPairProvider } from './components/TradingPairContext';
import TVWidget from './components/TVWidget';
import OrderWidget from './components/OrderWidget';
import { DarkModeContext, DarkModeProvider } from './components/DarkModeContext';
import SignalProcessor from './components/SignalProcessorWidget'; // Adjust the path as necessary
import React, { useState, useContext } from 'react';

import { Box, Typography, Button, Switch, Slider, MenuItem, FormControl, Select, FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material';

import DefaultTopBar from './topbars/DefaultTopBar';



function TradeEngineComponent() {


return (
  <>
        <DefaultTopBar />

        <TVWidget />

        <OrderWidget />

            

            
        </>
)
    }  ;



export default TradeEngineComponent;