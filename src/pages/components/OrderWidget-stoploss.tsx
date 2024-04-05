import React, { useState } from 'react';
import { TextField, ToggleButtonGroup, ToggleButton, Select, MenuItem, FormControl, InputLabel, Box, SelectChangeEvent } from '@mui/material';

function StopLossSection() {
  const [stopLossType, setStopLossType] = useState('market');
  const [stopPrice, setStopPrice] = useState('');
  const [protection, setProtection] = useState('none');
  const [risk, setRisk] = useState('accountEquity');
  const [stopLossCooldown, setStopLossCooldown] = useState(false);
  const [percentage, setPercentage] = useState('0%');
  const [price, setPrice] = useState('');

  const handleStopLossTypeChange = (event: React.MouseEvent<HTMLElement>, newStopLossType: string) => {
    if (newStopLossType !== null) {
      setStopLossType(newStopLossType);
    }
  };

  const handleProtectionChange = (event: SelectChangeEvent<string>) => {
    setProtection(event.target.value as string);
  };

  const handleRiskChange = (event: SelectChangeEvent<string>) => {
    setRisk(event.target.value as string);
  };

  const stopLossPercentages = ['-10%', '-5%', '-3%', '-2%', '-1%'];


  return (
    
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <div className='order-widget-content'>
      <ToggleButtonGroup
        color="primary"
        value={stopLossType}
        exclusive
        onChange={handleStopLossTypeChange}
        sx={{ marginBottom: 2 }}
      >
        <ToggleButton
  value="market"
  className="order-button"
>
  Stop Market
</ToggleButton>

<ToggleButton
  value="limit"
  className="order-button"
>
  Stop Limit
</ToggleButton>
      </ToggleButtonGroup>
      </div>

      <TextField 
        className="custom-text-field"
        fullWidth 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        label="Stop Price" 
        variant="outlined"
      />

      <Box sx={{ width: '100%' }}>
<div className="order-container">
  {/* Percentage Box */}
  <div className="percentage-box">{percentage}</div>

  {/* Percentage Buttons */}
  {stopLossPercentages.map((value) => (
    <button key={value} className="order-button" onClick={() => setPercentage(value)}>
      {value}
    </button>
  ))}
</div>
</Box>
<Box sx={{ marginTop: '18px', width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}> {/* This Box arranges its children in a column */}
  
  {/* Protection dropdown on its own line */}
  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id="protection-label">Protection</InputLabel>
      <Select
        labelId="protection-label"
        id="protection-select"
        value={protection}
        label="Protection"
        onChange={handleProtectionChange}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="breakEven">Break Even</MenuItem>
        <MenuItem value="followTakeProfit">Follow Take Profit</MenuItem>
        <MenuItem value="followPrice">Follow Price</MenuItem>
      </Select>
    </FormControl>
  </Box>

  {/* Percentage Box and Risk dropdown on the same line */}
  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
    {/* Percentage Box */}
    <Box className="percentage-box" sx={{ flexGrow: 1 }}>
      {percentage}
    </Box>

    <FormControl sx={{ flexGrow: 2 }}>
      <InputLabel id="risk-label">Risk</InputLabel>
      <Select
        labelId="risk-label"
        id="risk-select"
        value={risk}
        label="Risk"
        onChange={handleRiskChange}
      >
        <MenuItem value="accountEquity">Account Equity</MenuItem>
        <MenuItem value="portfolioEquity">Portfolio Equity</MenuItem>
        <MenuItem value="fixedAmount">Fixed Amount</MenuItem>
        <MenuItem value="currencyBalance">Currency Balance</MenuItem>
      </Select>
    </FormControl>
  </Box>
</Box>


      {/* Placeholder for the Stop Loss Cool Down switch */}
      
      {/* Placeholder for Account Equity and R/R section */}

    </Box>
  );
}

export default StopLossSection;
