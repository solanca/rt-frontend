import React, { useState } from 'react';
import { Box, ToggleButtonGroup, Slider, ToggleButton, Typography } from '@mui/material';

const TakeProfitSection = () => {
  const [ladderType, setLadderType] = useState('scales');
  const [targetPrice, setTargetPrice] = useState('fixed');
  const [profitVolume, setProfitVolume] = useState(100); // This state was missing

  // Handlers for the ToggleButtonGroup changes
  const handleLadderTypeChange = (event, newLadderType) => {
    if (newLadderType !== null) {
      setLadderType(newLadderType);
    }
  };

  const handleTargetPriceChange = (event, newTargetPrice) => {
    if (newTargetPrice !== null) {
      setTargetPrice(newTargetPrice);
    }
  };

  // Handler for the Slider change was also missing
  const handleProfitVolumeChange = (event, newValue) => {
    setProfitVolume(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="order-widget-content">
        {/* Ladder Type Section */}
        <ToggleButtonGroup
          color="primary"
          value={ladderType}
          exclusive
          onChange={handleLadderTypeChange}
          sx={{ marginBottom: 2 }}
        >
          <ToggleButton value="scales" className="order-button">Scales</ToggleButton>
          <ToggleButton value="targets" className="order-button">Targets</ToggleButton>
        </ToggleButtonGroup>
        
        {/* Target Price Section */}
        <ToggleButtonGroup
          color="primary"
          value={targetPrice}
          exclusive
          onChange={handleTargetPriceChange}
          sx={{ marginBottom: 2 }}
        >
          <ToggleButton value="fixed" className="order-button">Fixed Price</ToggleButton>
          <ToggleButton value="entry" className="order-button">Entry Price %</ToggleButton>
        </ToggleButtonGroup>

        {/* Profit Volume Slider */}
        <Box sx={{ width: '100%', padding: 2 }}>
          <Typography id="profit-volume-slider" gutterBottom>
            Profit Volume
          </Typography>
          <Slider
            aria-labelledby="profit-volume-slider"
            value={profitVolume}
            onChange={handleProfitVolumeChange} // This handler is now correctly referenced
            step={5}
            marks={[
              { value: 75, label: '75%' },
              { value: 80, label: '80%' },
              { value: 90, label: '90%' },
              { value: 95, label: '95%' },
              { value: 100, label: '100%' },
            ]}
            min={75}
            max={100}
            valueLabelDisplay="auto"
          />
        </Box>
        
      </div>
      
    </Box>
    
  );
};

export default TakeProfitSection;
