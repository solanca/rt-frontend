import {React, useState} from 'react';
import { IconButton, Box, Menu, MenuItem, Input, FormControlLabel, Switch, Typography, Divider } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Controls } from '@xyflow/react';

import WallpaperIcon from '@mui/icons-material/Wallpaper';
import AdbIcon from '@mui/icons-material/Adb';

function SignalsTopBar({ onBackgroundChange }) {

    
  const buttons = [
    { name: 'Indicator', color: 'red', label: 'Indicator', nodeType: 'indicator' },
    { name: 'Signal', color: 'blue', label: 'Signal', nodeType: 'signal' },
    { name: 'Logic', color: 'green', label: 'Logic', nodeType: 'logic' },
    { name: 'Relay', color: 'yellow', label: 'Relay', nodeType: 'relay' },
    { name: 'Buy', color: 'orange', label: 'Buy', nodeType: 'buy' },
    { name: 'Sell', color: 'purple', label: 'Sell', nodeType: 'sell' },
    { name: 'Output', color: 'cyan', label: 'Output', nodeType: 'output' },
  ];

  // Node buttons rendered as a separate constant
  const nodeButtons = buttons.map((button, index) => (
    <div key={index} style={{ textAlign: 'center', marginLeft: '7px' }}>
      <div
        className="dndnode"
        draggable
        onDragStart={(event) => onDragStart(event, button.nodeType)}
        style={{
          backgroundColor: button.color,
          color: 'white',
          opacity: '0.8',
          width: '60px',
          fontSize: '12px',
          paddingLeft: '5px',
          paddingRight: '5px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'grab',
        }}
      >
        {button.name}
      </div>
    </div>
  ));




  const [anchorEl, setAnchorEl] = useState(null);
  const [background, setBackground] = useState('lines');
  const [debugPanel, setDebugPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default color

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

   // This function gets called when a switch changes the background
   const handleBackgroundChange = (event) => {
    const newBackground = event.target.value;
    setBackground(newBackground); // Update local state
    onBackgroundChange(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    const newColor = event.target.value;
    const backgroundElement = document.querySelector('svg.react-flow__background');
    if (backgroundElement) {
      backgroundElement.style.backgroundColor = newColor;
    }
  };

  const toggleDebugPanel = () => {
    setDebugPanel((prev) => !prev);
  };
  // Placeholder reset function
  const onReset = () => {
    console.log('Reset flow');
  };

  // Drag start function setting the node type data
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  


  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
     

      {/* Draggable Nodes */}
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-start', gap: 2 }}>
      {nodeButtons}
      </Box>
       {/* Copy paste buttons in the middle */}
      <Box sx={{ flexGrow: 1, padding: '1px',display: 'flex-row', justifyContent: 'flex-end', mx: 2 }}>
        <button className="custom-button">Cut</button>
        <button className="custom-button">Copy</button>
        <button className="custom-button">Paste</button>
      </Box>
        {/* Custom HTML buttons in the middle */}
      <Box sx={{ flexGrow: 1, padding: '1px',display: 'flex-row', justifyContent: 'flex-end', mx: 2 }}>
        <button className="custom-button">Save</button>
        <button className="custom-button">Restore</button>
        <button className="custom-button">Compile</button>
      </Box>


      {/* Right Controls and Menu */}
      <Box sx={{ display: 'flex-row', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Controls position="top-right" />



        
     <IconButton onClick={handleMenuOpen}>
  <MoreVertIcon />
</IconButton>
<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ mt: 2 }}>
  <MenuItem>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <WallpaperIcon />
      <Typography variant="subtitle1" sx={{ ml: 1 }}>Background</Typography>
    </Box>
  </MenuItem>
  <MenuItem>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>

      <FormControlLabel
        control={<Switch checked={background === 'lines'} onChange={handleBackgroundChange} value="lines" />}
        label="Lines"
      />
    </Box>
  </MenuItem>
  <MenuItem>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
     
      <FormControlLabel
        control={<Switch checked={background === 'dots'} onChange={handleBackgroundChange} value="dots" />}
        label="Dots"
      />
    </Box>
  </MenuItem>
  <MenuItem>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
     
      <FormControlLabel
     control={<Switch checked={background === 'cross'} onChange={handleBackgroundChange} value="cross" />}
    label="Cross"
  />
    </Box>
  </MenuItem>
  <MenuItem>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>Background Color:</Typography>
          <Input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            sx={{ width: 48, height: 48, border: 'none', padding: 0, marginLeft: 1 }}
          />
        </Box>
      </MenuItem>
  <Divider />
  <MenuItem>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <AdbIcon />
      <Typography variant="subtitle1" sx={{ ml: 1 }}>Debug</Typography>
    </Box>
  </MenuItem>
  <MenuItem>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
     
      <FormControlLabel
        control={<Switch checked={debugPanel} onChange={toggleDebugPanel} />}
        label="Debug Panel"
      />
    </Box>
  </MenuItem>
</Menu>





      </Box>
    </Box>
  );
}

export default SignalsTopBar;
