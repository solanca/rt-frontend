import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Tab, Tabs, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens'; // Using LensIcon for the colored circles

function ExchangeAPICreate({ onSave, onCancel }) {
  const [tabValue, setTabValue] = useState('live');
  const [formData, setFormData] = useState({
    name: '',
    exchange: '',
    apiKey: '',
    apiSecret: '',
    mode: 'live', // This holds either 'paper' or 'live'
  });


  const notificationBoxStyle = {
    backgroundColor: '#2D2C3C', // Adjust the color to match the provided design
    borderRadius: 2,
    p: 2,
    mt: 2,
    mb: 4,
    border: '3px solid',
    borderColor: '#DEC6FF',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    color: 'white',
  };

  const stepIconStyle = {
   position: 'absolute',
  marginTop: '-3px',
  };

  const listItemTextStyle = {
    '& .MuiTypography-body1': {
      fontWeight: 'bold',
    },
  };


  const stepNumberStyle = {
    width: '24px',
    height: '24px',
    backgroundColor: '#0F0', // This should be the color you want for the numbers
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '8px',
    fontSize: '0.75rem', // Smaller font size for the numbers
  };


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setFormData({ ...formData, mode: newValue });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box borderBottom={1} borderColor="divider">
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="account type tabs">
         <Tab label="Live" value="live" />
          <Tab label="Paper" value="paper" />
        </Tabs>


{tabValue === 'live' && (
        <Box sx={notificationBoxStyle}>
          <List dense>
            {['Log in to your Exchange account and go to API Settings', 'Activate IP whitelisting and other desired options', 'Make sure you apply the correct permissions for trading on Spot and or Futures', 'Fill in all the fields like "API Key" and "Secret", in the form below.'].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {/* Numbered LensIcon */}
                  <Box sx={{ position: 'relative' }}>
                    <LensIcon sx={{ color: '#9C27B0' }} /> {/* Color from the design */}
                    <Typography sx={{
                      ...stepIconStyle,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'common.white',
                    }}>
                      {index + 1}
                    </Typography>
                  </Box>
                </ListItemIcon>
                <ListItemText primary={text} sx={listItemTextStyle} />
              </ListItem>
            ))}
          </List>
          <Button variant="contained" size="small" sx={{ mt: 2 }}>
            Full Guide
          </Button>
        </Box>
      )}





      </Box>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          required
          fullWidth
          id="name"
          label="Account Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="exchange-label">Exchange</InputLabel>
          <Select
            labelId="exchange-label"
            id="exchange"
            value={formData.exchange}
            label="Exchange"
            name="exchange"
            onChange={handleInputChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {/* List the exchanges you support here */}
            <MenuItem value="Kucoin">Kucoin</MenuItem>
            <MenuItem value="Kraken">Kraken</MenuItem>
            <MenuItem value="BinanceUS">Binance US</MenuItem>
            {/* etc */}
          </Select>
        </FormControl>
        <TextField
          required
          fullWidth
          id="apiKey"
          label="API Key"
          name="apiKey"
          value={formData.apiKey}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="apiSecret"
          label="API Secret"
          name="apiSecret"
          value={formData.apiSecret}
          onChange={handleInputChange}
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button type="submit" variant="contained" sx={{ mr: 1 }}>
            Save
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ExchangeAPICreate;


