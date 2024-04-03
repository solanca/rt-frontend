import React from 'react';
import { IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function HomeTopBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton>
        <HomeIcon />
      </IconButton>
      {/* Add more icons or components specific to HomeTopBar */}
      <p>Home Top Bar Placeholder</p>
    </Box>
  );
}

export default HomeTopBar;
