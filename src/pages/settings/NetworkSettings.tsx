import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function NetworkSettings() {
  // States for form fields and checkboxes
  const [port, setPort] = useState('1025');
  const [sslKeyPath, setSslKeyPath] = useState('');
  const [sslCertPath, setSslCertPath] = useState('');
  const [exchangeChecked, setExchangeChecked] = useState({ kucoin: false, binance: false, kraken: false, coinbase: false });
  const [apiChecked, setApiChecked] = useState({ api1: false, api2: false, api3: false, api4: false });

  const handlePortChange = (event) => {
    setPort(event.target.value);
  };

  const handleSslKeyPathChange = (event) => {
    setSslKeyPath(event.target.value);
  };

  const handleSslCertPathChange = (event) => {
    setSslCertPath(event.target.value);
  };

  const handleExchangeChange = (event) => {
    setExchangeChecked({ ...exchangeChecked, [event.target.name]: event.target.checked });
  };

  const handleApiChange = (event) => {
    setApiChecked({ ...apiChecked, [event.target.name]: event.target.checked });
  };

  return (
    <Box>
      <Typography variant="h6">Network Settings</Typography>

      <TextField
        label="Incoming Signals Port"
        value={port}
        onChange={handlePortChange}
        type="number"
        margin="normal"
      />

      <TextField
        label="SSL Key Path"
        value={sslKeyPath}
        onChange={handleSslKeyPathChange}
        margin="normal"
        fullWidth
      />

      <TextField
        label="SSL Certificate Path"
        value={sslCertPath}
        onChange={handleSslCertPathChange}
        margin="normal"
        fullWidth
      />

      <Typography variant="h6">Exchange sources:</Typography>
      <FormGroup row>
        {/* Exchange Checkboxes */}
        {Object.keys(exchangeChecked).map((exchange) => (
          <FormControlLabel
            key={exchange}
            control={
              <Checkbox
                checked={exchangeChecked[exchange]}
                onChange={handleExchangeChange}
                name={exchange}
              />
            }
            label={exchange.charAt(0).toUpperCase() + exchange.slice(1)}
          />
        ))}
      </FormGroup>

      <Typography>API sources:</Typography>
      <FormGroup row>
        {/* API Checkboxes */}
        {Object.keys(apiChecked).map((api) => (
          <FormControlLabel
            key={api}
            control={
              <Checkbox
                checked={apiChecked[api]}
                onChange={handleApiChange}
                name={api}
              />
            }
            label={api.toUpperCase()}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export default NetworkSettings;
