import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import WebsocketSettings from './settings/WebsocketSettings';
import UserProfileSettings from './settings/UserProfileSettings';
import ExchangeAPISettings from './settings/ExchangeAPISettings';
import AccountSecuritySettings from './settings/AccountSecuritySettings';
import NetworkSettings from './settings/NetworkSettings';
import DatabaseSettings from './settings/DatabaseSettings'
import NotificationSettings from './settings/NotificationSettings'
import AppSettings from './settings/AppSettings'
import SettingsTopBar from './topbars/SettingsTopBar';

function SettingsComponent() {
  const [value, setValue] = useState(0);
  // const [signals, setSignals] = useState([]); // Keep this if it's used elsewhere in your component or future updates

  const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue:any) => {
    setValue(newValue);
  };

  // const [exchangeChecked, setExchangeChecked] = useState({
  //   kucoin: false,
  //   binance: false,
  //   kraken: false,
  //   coinbase: false,
  // });

  // const [apiChecked, setApiChecked] = useState({
  //   api1: false,
  //   api2: false,
  //   api3: false,
  //   api4: false,
  // });

//   const handleExchangeChange = (event) => {
//     setExchangeChecked({
//       ...exchangeChecked,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const handleApiChange = (event) => {
//     setApiChecked({
//       ...apiChecked,
//       [event.target.name]: event.target.checked,
//     });
//   };

// const handleClearDatabase = async () => {
//   try {
//     const response = await fetch('http://127.0.0.1:8080/api/clear_database', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (!response.ok) throw new Error(`Error clearing database: ${response.status}`);
//     alert('Database cleared successfully');
//   } catch (error) {
//     console.error("Error clearing database:", error);
//     alert(`Error clearing database: ${error.message}`);
//   }
// };

// const boxStyle = {
//   display: 'flex',
//   flexDirection: 'row', // Align items horizontally
//   justifyContent: 'flex-start', // Align content to the start of the main axis
//   alignItems: 'flex-start', // Align items to the start of the cross axis
//   height: 'auto', // Height is determined by the content
//   border: '1px solid #333',
//   boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//   width: '80%', // Responsive width
//   maxWidth: '1200px', // Wider layout
//   marginTop: '10px', // 10px space at the top
//   marginLeft: 'auto', // Center the box horizontally
//   marginRight: 'auto', // Center the box horizontally
//   padding: '20px',
//   overflow: 'hidden', // Prevent overflow
// };


const settingsPanelStyle = {
    display: 'flex', // Use flex layout
    flexDirection: 'row', // Arrange children in a row
    height: 'calc(100vh - 64px)', // Subtract the header height if present
    overflow: 'hidden', // Prevent overflow
  };

  const tabsStyle = {
    borderRight: 1, 
    borderColor: 'divider', 
    minWidth: '200px', // Set a minimum width for the tabs panel
  };

  const contentBoxStyle = {
    flexGrow: 1, 
    overflow: 'hidden', // Prevent overflow
    p: 3, 
    width: '100%',
  };

return (
<div className = "flex-item">


<SettingsTopBar  />
 
  
    <Box sx={settingsPanelStyle}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={tabsStyle}
      >
        <Tab label="User Profile" />
        <Tab label="Account Security" />
        <Tab label="Network Communications" />
        <Tab label="Exchange API Keys" />
        <Tab label="Notification Settings" />
        <Tab label="Database Settings" />
        <Tab label="App Settings" />
        <Tab label="Websockets" /> 
      </Tabs>
      <Box sx={contentBoxStyle}>

 {value === 0 && <UserProfileSettings />}
    {value === 1 && <AccountSecuritySettings />}
    {value === 2 && <NetworkSettings />}
    {value === 3 && <ExchangeAPISettings /> }
    {value === 4 && <NotificationSettings />}
    {value === 5 && <DatabaseSettings />}
    {value === 6 && <AppSettings />}
    {value === 7 && <WebsocketSettings />}

      </Box>
    </Box>
    </div>
   
  );
}

export default SettingsComponent;
