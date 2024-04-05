import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
  Collapse,
} from '@mui/material';

function ExpireCloseSection() {
  const [startPosition, setStartPosition] = useState(false);
  const [expirePosition, setExpirePosition] = useState(false);
  const [timeBasedAutoClose, setTimeBasedAutoClose] = useState(false);

  const [price, setPrice] = useState('');
  const [percentage, setPercentage] = useState('0%');

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={<Switch size="small" checked={startPosition} onChange={(e) => setStartPosition(e.target.checked)} />}
          label="Start position at"
        />
        <Collapse in={startPosition}>
          <Box className="order-widget-content">
            <TextField 
              className="custom-text-field"
              fullWidth 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Price"
              variant="outlined"
            />
            <div className="order-container">
              <div className="percentage-box">{percentage}</div>
              <button className="order-button">Bid</button>
              <button className="order-button">Ask</button>
              <button className="order-button">Last</button>
            </div>
          </Box>
        </Collapse>

        <FormControlLabel
          control={<Switch size="small" checked={expirePosition} onChange={(e) => setExpirePosition(e.target.checked)} />}
          label="Expire position at"
        />
        <Collapse in={expirePosition}>
          <Box className="order-widget-content">
            <TextField 
              className="custom-text-field"
              fullWidth 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Price"
              variant="outlined"
            />
            <div className="order-container">
              <div className="percentage-box">{percentage}</div>
              <button className="order-button">Bid</button>
              <button className="order-button">Ask</button>
              <button className="order-button">Last</button>
            </div>
          </Box>
        </Collapse>

        <FormControlLabel
          control={<Switch size="small" checked={timeBasedAutoClose} onChange={(e) => setTimeBasedAutoClose(e.target.checked)} />}
          label="Time-Based auto close"
        />
        <Collapse in={timeBasedAutoClose}>
          <Box className="order-widget-content">
            <TextField 
              className="custom-text-field"
              fullWidth 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Price"
              variant="outlined"
            />
            <div className="order-container">
              <div className="percentage-box">{percentage}</div>
              <button className="order-button">Bid</button>
              <button className="order-button">Ask</button>
              <button className="order-button">Last</button>
            </div>
          </Box>
        </Collapse>
      </FormGroup>
    </Box>
  );
}

export default ExpireCloseSection;
