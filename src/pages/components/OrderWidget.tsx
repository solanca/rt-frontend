
import React, { useState, useContext } from 'react';
import { Box, Typography, Button, Switch, Slider, MenuItem, FormControl, Select, FormGroup, FormControlLabel, Checkbox, TextField } from '@mui/material';


function OrderWidget() {
    // Define state variables
    const [orderType, setOrderType] = useState('limit');
    const [price, setPrice] = useState('');
    const [takeProfit, setTakeProfit] = useState(false);
    const [stopLoss, setStopLoss] = useState(false);
    const [expirePosition, setExpirePosition] = useState('');
    const [timeBasedClose, setTimeBasedClose] = useState('');
    const [spendPercentage, setSpendPercentage] = useState(0);
  
    // Handler functions
    const handleOrderTypeChange = (event) => {
      setOrderType(event.target.value);
    };
  
    return (

<div className='orderWidget'>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Buy</Typography>
        <Typography variant="h6">Sell</Typography>
      </Box>

      <FormControl fullWidth>
        <Select
          value={orderType}
          onChange={handleOrderTypeChange}
        >
          <MenuItem value="market">Market</MenuItem>
          <MenuItem value="limit">Limit</MenuItem>
          <MenuItem value="stopLimit">Stop Limit</MenuItem>
          <MenuItem value="trailingStop">Trailing Stop</MenuItem>
          <MenuItem value="ladder">Ladder</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        label="Price"
        variant="outlined"
        margin="normal"
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2">Spend:</Typography>
        <Slider
          value={spendPercentage}
          onChange={(e, newValue) => setSpendPercentage(newValue)}
          step={5}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </Box>

      <FormGroup>
        <FormControlLabel control={<Switch checked={takeProfit} onChange={(e) => setTakeProfit(e.target.checked)} />} label="Take profit" />
        <FormControlLabel control={<Switch checked={stopLoss} onChange={(e) => setStopLoss(e.target.checked)} />} label="Stop loss" />
      </FormGroup>

      <FormControl fullWidth>
        <TextField
          fullWidth
          value={expirePosition}
          onChange={(e) => setExpirePosition(e.target.value)}
          label="Expire position at"
          variant="outlined"
          margin="normal"
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          fullWidth
          value={timeBasedClose}
          onChange={(e) => setTimeBasedClose(e.target.value)}
          label="Time-Based auto close"
          variant="outlined"
          margin="normal"
        />
      </FormControl>

      <Button variant="contained" color="primary" fullWidth>Place order</Button>

      </div>

);
}

export default OrderWidget;