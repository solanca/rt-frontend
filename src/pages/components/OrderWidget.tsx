import React, { useState } from 'react';
import { Box, Typography, Button, Tab, Tabs, TextField, Slider, FormGroup, FormControlLabel, Switch, Collapse, IconButton,Tooltip } from '@mui/material';


function OrderWidget() {
  const [mainTabValue, setMainTabValue] = useState('buy');
  const [orderType, setOrderType] = useState('market');
  const [price, setPrice] = useState('');
  const [spendAmount, setSpendAmount] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [spendPercentage, setSpendPercentage] = useState(0);
  const [takeProfit, setTakeProfit] = useState(false);
  const [stopLoss, setStopLoss] = useState(false);
  const [expirePosition, setExpirePosition] = useState('');
  const [timeBasedClose, setTimeBasedClose] = useState('');
  const [takeProfitValue, setTakeProfitValue] = useState(''); // State to hold the take profit value
  const [percentage, setPercentage] = useState('0%');

  const handleMainTabChange = (event, newValue) => {
    setMainTabValue(newValue);
  };

  const handleOrderTypeChange = (event, newValue) => {
    setOrderType(newValue);
  };

  const percentages = ['5%', '10%', '15%', '25%', '50%', '100%'];

  return (
    <div className='orderWidget'>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={mainTabValue} onChange={handleMainTabChange} aria-label="Buy/Sell tabs" variant="fullWidth">
        <Tab 
          label={<Typography style={{ width: '100%', backgroundColor: mainTabValue === 'buy' ? 'rgba(0, 128, 0, 0.3)' : undefined }}>Buy</Typography>} 
          value="buy" 
        />
        <Tab 
          label={<Typography style={{ width: '100%', backgroundColor: mainTabValue === 'sell' ? 'rgba(255, 0, 0, 0.3)' : undefined }}>Sell</Typography>} 
          value="sell" 
        />
      </Tabs>
    </Box>

    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={orderType} onChange={handleOrderTypeChange} aria-label="Order type tabs" variant="fullWidth">
        <Tab 
          label={<Typography style={{ fontSize: '0.75rem', padding: '6px 12px' }}>Market</Typography>} 
          value="market" 
          sx={{ minWidth: 50 }} // Reducing minimum width to reduce side padding
        />
        <Tab 
          label={<Typography style={{ fontSize: '0.75rem', padding: '6px 12px' }}>Limit</Typography>} 
          value="limit" 
          sx={{ minWidth: 50 }}
        />
        <Tab 
          label={<Typography style={{ fontSize: '0.75rem', padding: '6px 12px' }}>Ladder</Typography>} 
          value="ladder" 
          sx={{ minWidth: 50 }}
        />
        <Tab 
          label={<Typography style={{ fontSize: '0.75rem', padding: '6px 12px' }}>OCO</Typography>} 
          value="OCO" 
          sx={{ minWidth: 50 }}
        />
      </Tabs>

    </Box>

    <div className='order-widget-content'>
      <TextField 
        className="custom-text-field"
        fullWidth 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        label="Price" 
        variant="outlined"
      />



<div className="order-container">
      {/* Percentage Box */}
      <div className="percentage-box">{percentage}</div>

      {/* Buttons */}
      <button className="order-button">Bid</button>
      <button className="order-button">Ask</button>
      <button className="order-button">Last</button>
    </div>


      <TextField 
        className="custom-text-field"
        fullWidth 
        value={spendAmount} 
        onChange={(e) => setSpendAmount(e.target.value)} 
        label="Spend" 
        variant="outlined"
      />
 <div className="order-container">
      {/* Percentage Box */}
      <div className="percentage-box">{percentage}</div>

      {/* Percentage Buttons */}
      {percentages.map((value) => (
        <button key={value} className="order-button" onClick={() => setPercentage(value)}>
          {value}
        </button>
      ))}
    </div>

      <Box>
        <Typography variant="body2">Spend Percentage:</Typography>
        <Slider value={spendPercentage} onChange={(e, newValue) => setSpendPercentage(newValue as number)} step={5} marks min={0} max={100} valueLabelDisplay="auto" />
      </Box>
      <TextField 
        className="custom-text-field"
        fullWidth 
        value={buyAmount} 
        onChange={(e) => setBuyAmount(e.target.value)} 
        label="Buy" 
        variant="outlined"
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={takeProfit} onChange={(e) => setTakeProfit(e.target.checked)} size="small" />}
          label="Take profit"
        />
        <Collapse in={takeProfit}>
          <TextField
            className="custom-text-field"
            fullWidth
            value={takeProfitValue}
            onChange={(e) => setTakeProfitValue(e.target.value)}
            label="Take Profit Value"
            variant="outlined"
          />
          {/* Additional fields or components can go here */}
        </Collapse>
        <FormControlLabel
          control={<Switch checked={stopLoss} onChange={(e) => setStopLoss(e.target.checked)} size="small" />}
          label="Stop loss"
        />
      </FormGroup>

      <TextField 
        className="custom-text-field"
        fullWidth 
        value={expirePosition} 
        onChange={(e) => setExpirePosition(e.target.value)} 
        label="Expire position at" 
        variant="outlined"
      />
      <TextField 
        className="custom-text-field"
        fullWidth 
        value={timeBasedClose} 
        onChange={(e) => setTimeBasedClose(e.target.value)} 
        label="Time-Based auto close" 
        variant="outlined"
      />

      <Button variant="contained" color={mainTabValue === 'buy' ? "success" : "error"} fullWidth>
        {mainTabValue === 'buy' ? 'Buy' : 'Sell'}
      </Button>
    </div>
  </div>
);

}

export default OrderWidget;